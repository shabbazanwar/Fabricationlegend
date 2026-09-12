import { Resend } from "resend";
import { CONTACT, SITE } from "@/lib/constants";
import type { ContactInput } from "@/lib/validations/contact";

/** Enquirer-supplied text lands in an HTML email, so escape it. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEnquiryNotification(enquiry: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: "RESEND_API_KEY not set" };

  const to = process.env.CONTACT_NOTIFY_TO ?? CONTACT.email;
  // Until a domain is verified in Resend, onboarding@resend.dev only delivers
  // to the address the Resend account was created with.
  const from = process.env.CONTACT_NOTIFY_FROM ?? "onboarding@resend.dev";

  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || "Not provided"],
    ["Service", enquiry.serviceInterest || "Not specified"],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px">
      <h2 style="color:#e51d25;margin:0 0 4px">New website enquiry</h2>
      <p style="color:#666;margin:0 0 20px;font-size:14px">via ${escapeHtml(SITE.url)}</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="padding:8px 12px 8px 0;color:#666;vertical-align:top;white-space:nowrap">${label}</td>
                 <td style="padding:8px 0;color:#111"><strong>${escapeHtml(value)}</strong></td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#666;font-size:14px">Message</p>
      <div style="padding:14px;background:#f6f6f6;border-left:3px solid #e51d25;white-space:pre-wrap;font-size:14px;color:#111">${escapeHtml(enquiry.message)}</div>
      <p style="margin-top:22px;color:#666;font-size:13px">Reply straight to this email to answer ${escapeHtml(enquiry.name)}.</p>
    </div>`;

  const text = [
    "New website enquiry",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `Fabrication Legend Website <${from}>`,
    to,
    subject: `New enquiry from ${enquiry.name}`,
    replyTo: enquiry.email,
    html,
    text,
  });

  if (error) throw new Error(error.message);
  return { sent: true };
}
