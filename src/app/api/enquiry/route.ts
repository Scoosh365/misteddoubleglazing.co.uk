import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT
  ? Number(process.env.SMTP_PORT)
  : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || smtpUser;
const smtpTo = process.env.SMTP_TO || smtpUser;

export async function POST(req: NextRequest) {
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, phone, postcode, message, company } = body as {
    name?: string;
    email?: string;
    phone?: string;
    postcode?: string;
    message?: string;
    company?: string;
  };

  if (company) {
    // Honeypot field was filled – likely a bot submission.
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !phone || !postcode || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all fields." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New website enquiry from ${name}`;

  const text = [
    `New website enquiry:`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Postcode: ${postcode}`,
    "",
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Postcode:</strong> ${postcode}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending enquiry email", error);
    return NextResponse.json(
      {
        ok: false,
        error: "There was a problem sending your enquiry. Please try again later.",
      },
      { status: 500 },
    );
  }
}

