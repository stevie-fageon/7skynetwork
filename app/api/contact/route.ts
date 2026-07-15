import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";

/**
 * POST /api/contact
 * Validates the contact form and sends an email via Resend.
 *
 * Required environment variables (see .env.example):
 *  - RESEND_API_KEY
 *  - CONTACT_EMAIL   (where the message is delivered)
 *  - RESEND_FROM_EMAIL (the "from" address — must be a verified domain,
 *    or use onboarding@resend.dev for testing)
 */
export async function POST(request: Request) {
  // 1. Parse & validate the body
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const { name, email, message } = parsed.data;

  // 2. Make sure Resend is configured
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing Resend environment variables.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  // 3. Send the email
  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `7skynetwork Website <${fromEmail}>`,
      to: toEmail,
      reply_to: email,
      subject: `New enquiry from ${name} — 7skynetwork.net`,
      text: [
        `New message from the 7skynetwork contact form.`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        `${message}`,
      ].join("\n"),
      html: [
        `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">`,
        `<h2 style="margin:0 0 8px">New enquiry — 7skynetwork.net</h2>`,
        `<p style="margin:0 0 16px;color:#475569">Someone reached out via the website contact form.</p>`,
        `<table style="border-collapse:collapse;font-size:14px">`,
        `<tr><td style="padding:4px 16px 4px 0;color:#64748b;font-weight:600">Name</td><td>${escapeHtml(name)}</td></tr>`,
        `<tr><td style="padding:4px 16px 4px 0;color:#64748b;font-weight:600">Email</td><td><a href="mailto:${escapeAttr(email)}" style="color:#7c3aed">${escapeHtml(email)}</a></td></tr>`,
        `</table>`,
        `<h3 style="margin:20px 0 8px;font-size:14px;color:#64748b">Message</h3>`,
        `<p style="margin:0;white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px">${escapeHtml(message)}</p>`,
        `</div>`,
      ].join(""),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send the email. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

/** Minimal HTML escapers to keep user input safe in the email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function escapeAttr(str: string): string {
  return str.replace(/"/g, "&quot;");
}
