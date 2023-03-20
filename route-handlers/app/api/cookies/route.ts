import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function GET(request: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    return NextResponse.json({ cookieToken: `${token?.value}` }, {
        status: 200,
        headers: { "Set-Cookie": `token=${token?.value}-modified!` },
    });
}