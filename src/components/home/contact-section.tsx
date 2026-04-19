"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold text-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
          Sending…
        </>
      ) : (
        <>
          Send Inquiry
          <span className="material-symbols-outlined">send</span>
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
    <section id="contact" className="py-24 bg-surface-container-low">
      <div className="max-w-full mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-6">
              Let&apos;s build something enduring.
            </h2>
            <p className="text-on-surface-variant mb-12 max-w-sm">
              Ready to elevate your digital presence? Reach out for a consultation or just to say
              hi.
            </p>
            <div className="space-y-6">
              <a className="flex items-center gap-4 group" href="mailto:shimayalabs@gmail.com">
                <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Email
                  </p>
                  <p className="text-on-surface font-medium">shimayalabs@gmail.com</p>
                </div>
              </a>
              <a className="flex items-center gap-4 group" href="https://wa.me/919311578855">
                <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">
                    chat
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    WhatsApp
                  </p>
                  <p className="text-on-surface font-medium">+91 9311578855</p>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              action={action}
              className="bg-surface-container-lowest p-10 rounded-3xl shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all outline-none text-on-surface placeholder:text-on-surface-variant/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all outline-none text-on-surface placeholder:text-on-surface-variant/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all outline-none text-on-surface placeholder:text-on-surface-variant/50"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Project Need
                </label>
                <select
                  name="projectNeed"
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all outline-none text-on-surface"
                >
                  <option>New Website Development</option>
                  <option>Frontend Re-architecture</option>
                  <option>Product Development</option>
                  <option>Consulting/Audit</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your vision…"
                  rows={4}
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all outline-none text-on-surface placeholder:text-on-surface-variant/50 resize-none"
                />
              </div>

              {state && (
                <div
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                    state.status === "success"
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-error-container text-on-error-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-base">
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
