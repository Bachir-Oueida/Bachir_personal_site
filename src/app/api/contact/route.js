import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Sends contact form messages through Fastmail SMTP (smtp.fastmail.com:465).
// Reads FASTMAIL_USER, FASTMAIL_APP_PASSWORD, FASTMAIL_TO, and FASTMAIL_FROM.

const SUBJECTS = {
  buying: 'Looking to Buy',
  selling: 'Looking to Sell',
  leasing: 'Property Leasing',
  investment: 'Investment Opportunities',
  'market-analysis': 'Market Analysis',
  consultation: 'General Consultation',
  other: 'Other',
};

function cleanLine(value, max) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function describeEnv(name, value) {
  const text = String(value ?? '').trim();
  if (!text) return { name, set: false };
  const at = text.lastIndexOf('@');
  return {
    name,
    set: true,
    length: text.length,
    looksLikeEmail: isEmail(text),
    domain: at > 0 ? text.slice(at + 1) : null,
  };
}

export async function POST(request) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const to = process.env.SMTP_TO || user;
  const from = process.env.SMTP_FROM || user;

  console.log('[contact] env', {
    vercelEnv: process.env.VERCEL_ENV || 'local',
    SMTP_USER: describeEnv('SMTP_USER', user),
    SMTP_PASSWORD: {
      name: 'SMTP_PASSWORD',
      set: Boolean(String(pass ?? '').trim()),
      length: String(pass ?? '').trim().length,
    },
    SMTP_TO: describeEnv('SMTP_TO', process.env.SMTP_TO),
    SMTP_FROM: describeEnv('SMTP_FROM', process.env.SMTP_FROM),
    toFallsBackToUser: !process.env.SMTP_TO,
    fromFallsBackToUser: !process.env.SMTP_FROM,
    userMatchesFrom: String(user ?? '').trim().toLowerCase() === String(from ?? '').trim().toLowerCase(),
  });

  if (!user || !pass || !to || !from) {
    console.error('[contact] missing SMTP settings', {
      SMTP_USER: Boolean(user),
      SMTP_PASSWORD: Boolean(pass),
      SMTP_TO: Boolean(to),
      SMTP_FROM: Boolean(from),
    });
    return NextResponse.json(
      { error: 'The contact form is not set up yet. Please email bachir@oueida.com.' },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'The form could not be read.' }, { status: 400 });
  }

  const name = cleanLine(body.name, 120);
  const email = cleanLine(body.email, 200);
  const phone = cleanLine(body.phone, 40);
  const message = String(body.message ?? '').trim().slice(0, 5000);
  const subjectKey = cleanLine(body.subject, 40);
  const preferred = cleanLine(body.preferredContact, 40);
  const urgency = cleanLine(body.urgency, 40);
  const propertyTitle = cleanLine(body.propertyTitle, 200);

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json(
      { error: 'Please include your name, a valid email, and a message.' },
      { status: 400 }
    );
  }

  const subjectLabel = propertyTitle
    ? `Inquiry about ${propertyTitle}`
    : SUBJECTS[subjectKey] || 'Website inquiry';

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    propertyTitle && `Property: ${propertyTitle}`,
    subjectKey && `Subject: ${SUBJECTS[subjectKey] || subjectKey}`,
    preferred && `Preferred contact: ${preferred}`,
    urgency && `Urgency: ${urgency}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.fastmail.com',
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    console.log('[contact] sending', {
      host: 'smtp.fastmail.com',
      port: 465,
      fromDomain: from.slice(from.lastIndexOf('@') + 1),
      toDomain: to.slice(to.lastIndexOf('@') + 1),
    });

    await transporter.sendMail({
      from: `"Bachir Oueida Website" <${from}>`,
      to,
      replyTo: email,
      subject: subjectLabel,
      text: lines,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form send failed', error?.code, error?.responseCode, error?.message);
    return NextResponse.json(
      {
        error: 'The message could not be sent. Please try again or email bachir@oueida.com.',
        code: error?.code || error?.responseCode || 'SMTP_ERROR',
        detail: String(error?.message || '').slice(0, 300),
      },
      { status: 500 }
    );
  }
}
