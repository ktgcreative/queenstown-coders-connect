'use server';

import { Resend } from 'resend';
import WelcomeEmail from '@/components/(user)/email/templates/WelcomeEmail';
import { render } from '@react-email/render';

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://qtcc.co.nz";

interface EmailResult {
    success?: {
        id: string;
        from: string;
        to: string[];
        subject: string;
    };
    error?: {
        message: string;
        statusCode?: number;
    };
}

export async function sendEmail(data: {
    email: string;
    name: string;
    interests: string[]
}): Promise<EmailResult> {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { email, name } = data;

    try {
        // First render the email template to HTML
        const emailComponent = WelcomeEmail({ name, dashboardUrl: `${baseUrl}/dashboard` });
        const emailHtml = await render(emailComponent);

        // Send the email using Resend
        const result = await resend.emails.send({
            from: 'Queenstown Coders <no-reply@qtcc.co.nz>',
            to: [email],
            subject: 'Welcome to Queenstown Coders Connect! 🏔️',
            html: emailHtml,
        });

        if (result.error) {
            throw new Error(result.error.message);
        }

        return {
            success: {
                id: result.data?.id || 'unknown',
                from: 'Queenstown Coders <no-reply@qtcc.co.nz>',
                to: [email],
                subject: 'Welcome to Queenstown Coders Connect! 🏔️'
            }
        };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            error: {
                message: error instanceof Error ? error.message : 'Failed to send email'
            }
        };
    }
} 