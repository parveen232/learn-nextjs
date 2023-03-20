import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST() {
  return NextResponse.json({ msg: "Hi there I'm POST ..." });
}