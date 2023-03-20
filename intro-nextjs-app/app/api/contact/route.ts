import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const idk = await request.json();
    console.log(idk)
    return NextResponse.json({ message: 'ok' })
}