export const revalidate = 10;
export const dynamic = 'force-static';

export async function GET(request: Request) {
  return new Response(new Date().toISOString())
}