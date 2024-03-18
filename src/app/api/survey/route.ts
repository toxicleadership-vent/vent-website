import { NextResponse } from 'next/server'
import prisma from './../../../lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()

  try {
    const a = await prisma.survey.create({ data })
    return NextResponse.json({ status: 'ok', data: { success: true } })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ status: 'failed', data: { success: false } })
  }
}
