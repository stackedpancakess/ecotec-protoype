import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validate the contact form data
function validateContactData(data: unknown): data is ContactFormData {
  if (!data || typeof data !== 'object') return false;

  const obj = data as Record<string, unknown>;
  return (
    typeof obj.name === 'string' &&
    obj.name.trim().length > 0 &&
    typeof obj.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) &&
    typeof obj.subject === 'string' &&
    obj.subject.trim().length > 0 &&
    typeof obj.message === 'string' &&
    obj.message.trim().length >= 10
  );
}

// Send email using Resend
async function sendEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const senderEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const recipientEmail = process.env.EMAIL_RECIPIENT || 'contact@ecotecasia.com';

    // Email to the company
    await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(formData.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: formData.email,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: senderEmail,
      to: formData.email,
      subject: 'We received your message - ECOTECASIA',
      html: `
        <h2>Thank you for contacting ECOTECASIA</h2>
        <p>Hi ${escapeHtml(formData.name)},</p>
        <p>We have received your message and will get back to you as soon as possible, typically within 24 business hours.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p><strong>Subject:</strong> ${escapeHtml(formData.subject)}</p>
        <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>ECOTECASIA Team</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Utility function to prevent HTML injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: NextRequest) {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const body = await request.json();

    // Validate the data
    if (!validateContactData(body)) {
      return NextResponse.json(
        { message: 'Invalid form data. Please check all required fields.' },
        { status: 400, headers }
      );
    }

    // Attempt to send email
    const emailSent = await sendEmail(body);

    if (!emailSent) {
      return NextResponse.json(
        { message: 'Failed to send email. Please try again later.' },
        { status: 500, headers }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again later.' },
      { status: 500, headers }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
