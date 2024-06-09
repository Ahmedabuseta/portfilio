import { EmailTemplate ,EmailTemplateProps } from '@/components/email-form';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {

  const {username,message,email} = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'amd <onboarding@resend.dev>',
      to: [`ahmed.a.abuseta@gmail.com`],
      subject: 'new msg from portfilio',
      react: EmailTemplate({ userName:username, msg: message, emailSender: email }),
      text: 'homsa', // Add the missing 'text' property
      reply_to:`${email}`
    });
    console.log(error);
    
    if (error) {
      return NextResponse.json(error);
    }
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(`${ error }`, { status: 500 });
  }
}
