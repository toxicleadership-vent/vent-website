import { NextResponse } from 'next/server'
import prisma from './../../../lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()

  try {
    const createDate = {
      ...data.questions,
      ...data.info,
      feedback: data.feedback?.text,
      feedbackLike: data.feedback?.like,
    }
    await prisma.survey.create({
      data: createDate,
    })
    return NextResponse.json({ status: 'ok', data: { success: true } })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ status: 'failed', data: { success: false } })
  }
}
