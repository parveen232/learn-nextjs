import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return NextResponse.json({ posts });
}