import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }) {
    const { slug } = params;
    return NextResponse.json({ slug: `${slug}` });
}