'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
  const { name, email, message } = contactFormSchema.parse(formData);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER, // send to your own email
    subject: `New message from ${name} via portfolio`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p>You have received a new message from your portfolio contact form.</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    // In a real app, you'd want to log this error to a logging service
    throw new Error('Failed to send email.');
  }
}
