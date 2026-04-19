"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "success" | "error";
  message: string;
} | null;

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const projectNeed = (formData.get("projectNeed") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Name, email, and message are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: "error", message: "Email service is not configured yet." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Shimaya Contact <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: "shimayalabs@gmail.com",
    replyTo: email,
    subject: `[Shimaya] New ${projectNeed} inquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#161c27">
        <div style="background:#3b309e;padding:32px 40px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700">New Project Inquiry</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px">via shimayalabs.com</p>
        </div>
        <div style="background:#f1f3ff;padding:32px 40px;border-radius:0 0 12px 12px;border:1px solid #dde2f3;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#787584;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:130px">Name</td>
              <td style="padding:10px 0;font-size:15px;font-weight:500">${name}</td>
            </tr>
            <tr style="border-top:1px solid #dde2f3">
              <td style="padding:10px 0;font-size:13px;color:#787584;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Email</td>
              <td style="padding:10px 0;font-size:15px"><a href="mailto:${email}" style="color:#3b309e">${email}</a></td>
            </tr>
            ${
              company
                ? `<tr style="border-top:1px solid #dde2f3">
              <td style="padding:10px 0;font-size:13px;color:#787584;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Company</td>
              <td style="padding:10px 0;font-size:15px">${company}</td>
            </tr>`
                : ""
            }
            <tr style="border-top:1px solid #dde2f3">
              <td style="padding:10px 0;font-size:13px;color:#787584;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Project</td>
              <td style="padding:10px 0;font-size:15px">${projectNeed}</td>
            </tr>
            <tr style="border-top:1px solid #dde2f3">
              <td style="padding:10px 0;font-size:13px;color:#787584;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Message</td>
              <td style="padding:10px 0;font-size:15px;line-height:1.6;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid #dde2f3">
            <a href="mailto:${email}" style="display:inline-block;background:#3b309e;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">
              Reply to ${name} →
            </a>
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { status: "error", message: "Failed to send. Please try again or email directly." };
  }

  return { status: "success", message: "Message sent! I'll get back to you within 24 hours." };
}
