import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request: Request) {
    const headersList = headers();
    const host: any = headersList.get("Host");
    // any?, string..........?

    return NextResponse.json({ host: `${host}` }, {
        status: 200,
        headers: { host },
    });
}