import { NextResponse } from "next/server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

interface SendMailRequest {
    email: string;
    object: string;
    content: string;
}

export async function POST(request: Request) {

    const { email, object, content } = await request.json() as SendMailRequest;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

    // Configurer l'email
    const mailOptions: Mail.Options = {
        from: `"Formulaire de contact" <${email}>`,
        replyTo: email, 
        to: process.env.RECEIVER_EMAIL,
        subject: object,
        text: content,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch(e: unknown) {
        console.log(e);
        return NextResponse.json({ success: false, message: "Impossible d'envoyer le message. Réessayez plus tard ou contactez moi via linkedin." });
    }

    return NextResponse.json({
        success: true,
    });
}