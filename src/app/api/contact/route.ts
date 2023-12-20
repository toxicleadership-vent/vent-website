import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const formatData = (data: Record<string, string>) => {
  const formated = Object.keys(data)
    .map((item) => {
      return `${item}: ${data[item]}`
    })
    .join('\n')
  return formated
}

export async function POST(request: Request) {
  const data = await request.json()
  const formatedData = formatData(data)
  const msg = {
    to: 'kasia@toxicleadershipvent.com', // Change to your recipient
    from: 'kasia@toxicleadershipvent.com', // Change to your verified sender
    subject: 'a new form entry',
    text: `The form contained\n ${formatedData}}}`,
  }

  try {
    const a = await sgMail.send(msg)
    return NextResponse.json({ status: 'ok', data: { success: true } })
  } catch (err) {
    return NextResponse.json({ status: 'failed', data: { success: false } })
  }
}
