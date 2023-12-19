import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  const data = await request.json()
  const msg = {
    to: 'kasia@toxicleadershipvent.com', // Change to your recipient
    from: 'kasia@toxicleadershipvent.com', // Change to your verified sender
    subject: 'a new form entry',
    text: `The form contained\n ${JSON.stringify(data)}}`,
  }

  try {
    const a = await sgMail.send(msg)
    return NextResponse.json({ status: 'ok', data: { success: true } })
  } catch (err) {
    return NextResponse.json({ status: 'failed', data: { success: false } })
  }
}
