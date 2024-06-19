import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic';

// GET query all guest data for console
export async function GET() {
  try {
    const result = await sql`
              SELECT *
              FROM guests;`;
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
