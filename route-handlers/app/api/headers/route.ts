import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request: Request) {
    const headersList = headers();
    const host = headersList.get("Host");

    return NextResponse.json({ host: `${host}` }, {
        status: 200,
        headers: { host },
    });
}