import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "../analytics";

/** Same Formspree endpoint and fields as the resume site's contact form, so
 * both sites land in one inbox. Submitted with fetch so the visitor stays on
 * the page and sees a confirmation instead of Formspree's thank-you page. */
const FORM_ENDPOINT = "https://formspree.io/f/mpzgazbz";

type Status = "idle" | "sending" | "sent" | "error";

type Props = { open: boolean; onClose: () => void };

export default function ContactModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    document.body.style.overflow = "";
    setValidated(false);
    if (status === "sent") {
      formRef.current?.reset();
      setStatus("idle");
    }
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);
    if (!form.checkValidity()) return;

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Formspree ${response.status}`);
      setStatus("sent");
      trackEvent("Contact Form Submitted", { site: "studio" }, { sendBeacon: true });
    } catch {
      setStatus("error");
    }
  };

  return (
    <dialog
      className="contact-dialog"
      ref={dialogRef}
      aria-labelledby="contact-title"
      onClose={handleClose}
      onClick={(e) => {
        // A click on the backdrop lands on the dialog element itself.
        if (e.target === dialogRef.current) handleClose();
      }}
    >
      <div className="contact-card">
        <div className="contact-head">
          <h2 className="contact-title studio-display" id="contact-title">Let's talk</h2>
          <button type="button" className="contact-close" onClick={handleClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {status === "sent" ? (
          <div className="contact-sent">
            <p className="contact-sent-title">Sent. Thank you.</p>
            <p className="contact-sent-sub">I read every message myself and reply within a day.</p>
            <button type="button" className="studio-btn studio-btn--accent" onClick={handleClose}>Done</button>
          </div>
        ) : (
          <form
            ref={formRef}
            className={validated ? "contact-form was-validated" : "contact-form"}
            noValidate
            onSubmit={handleSubmit}
          >
            <p className="contact-honeypot" aria-hidden="true">
              <label>
                Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="contact-grid">
              <label className="contact-field">
                <span>First name</span>
                <input type="text" name="firstName" required autoComplete="given-name" />
                <em>Please enter your first name.</em>
              </label>
              <label className="contact-field">
                <span>Last name</span>
                <input type="text" name="lastName" required autoComplete="family-name" />
                <em>Please enter your last name.</em>
              </label>
            </div>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" required autoComplete="email" placeholder="name@example.com" />
              <em>Please enter a valid email.</em>
            </label>
            <label className="contact-field">
              <span>How can I help?</span>
              <textarea name="message" required rows={5} />
              <em>Please enter a message.</em>
            </label>
            {status === "error" && (
              <p className="contact-error" role="alert">
                That didn't go through. Try again, or email support@christianfesta.com.
              </p>
            )}
            <div className="contact-actions">
              <button type="button" className="studio-btn studio-btn--ghost" onClick={handleClose}>Cancel</button>
              <button type="submit" className="studio-btn studio-btn--accent" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
