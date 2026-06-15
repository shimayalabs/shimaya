"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";
import styles from "./contact-section.module.scss";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.submitBtn}>
      {pending ? (
        <>
          <span className={`material-symbols-outlined ${styles.spinner}`} aria-hidden>
            progress_activity
          </span>
          Sending…
        </>
      ) : (
        <>
          Send Inquiry
          <span className="material-symbols-outlined" aria-hidden>
            send
          </span>
        </>
      )}
    </button>
  );
}

export function ContactSection() {
  const [state, action] = useActionState<ContactState, FormData>(sendContactEmail, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Let&apos;s build something enduring.</h2>
            <p className={styles.subtitle}>
              Ready to elevate your digital presence? Reach out for a consultation or just to
              say hi.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:shimayalabs@gmail.com" className={styles.contactLink}>
                <div className={styles.contactIconWrap}>
                  <span className="material-symbols-outlined" aria-hidden>
                    mail
                  </span>
                </div>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>shimayalabs@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/919311578855" className={styles.contactLink}>
                <div className={styles.contactIconWrap}>
                  <span className="material-symbols-outlined" aria-hidden>
                    chat
                  </span>
                </div>
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <p className={styles.contactValue}>+91 9311578855</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form
              ref={formRef}
              action={action}
              className={styles.formCard}
            >
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Project Need</label>
                <select name="projectNeed" className={styles.select}>
                  <option>New Website Development</option>
                  <option>Frontend Re-architecture</option>
                  <option>Product Development</option>
                  <option>AI Integration</option>
                  <option>Consulting / Audit</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your vision…"
                  rows={4}
                  className={styles.textarea}
                />
              </div>

              {state && (
                <div
                  className={
                    state.status === "success" ? styles.alertSuccess : styles.alertError
                  }
                  role="alert"
                >
                  <span className="material-symbols-outlined" aria-hidden>
                    {state.status === "success" ? "check_circle" : "error"}
                  </span>
                  {state.message}
                </div>
              )}

              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
