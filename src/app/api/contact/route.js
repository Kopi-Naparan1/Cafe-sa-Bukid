import { Resend } from "resend";

function isBlank(value) {
  return typeof value !== "string" || value.trim() === "";
}

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          error: "Email service is not configured. Missing RESEND_API_KEY.",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (
      isBlank(name) ||
      isBlank(email) ||
      isBlank(subject) ||
      isBlank(message)
    ) {
      return Response.json(
        {
          success: false,
          error: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kopinaparan13@gmail.com",
      subject: `Cafe Inquiry: ${subject.trim()}`,
      replyTo: email.trim(),
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Subject:</strong> ${subject.trim()}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email.",
      },
      {
        status: 500,
      },
    );
  }
}
