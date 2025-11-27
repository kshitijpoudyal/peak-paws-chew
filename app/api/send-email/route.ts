import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // For now, we'll use a simple fetch to a service like Formspree or similar
    // You can also integrate with services like SendGrid, Resend, or AWS SES
    
    // Using Web3Forms (free service that doesn't require API keys for basic usage)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || '',
        from_name: name,
        email: email,
        subject: `Peak Paws Contact: ${subject}`,
        message: `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
        to: 'kshitijpoudyal@gmail.com',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
