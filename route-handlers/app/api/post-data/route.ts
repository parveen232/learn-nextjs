import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let body = await request.json();
  let name = body.name;

  return NextResponse.json({ name: `${name}` });
}