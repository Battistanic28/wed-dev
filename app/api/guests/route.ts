import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

// GET query guests by last name
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fullName = searchParams.get('full_name')?.toUpperCase();

  try {
    const result = await sql`
              SELECT *
              FROM guests
              WHERE group_id = (
                SELECT group_id
                FROM guests
                WHERE UPPER(full_name) = ${fullName}
              )`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// POST: update guest response
export async function POST(request: NextRequest) {
  try {
    const entries = await request.json();

    // TODO: consider more performant alternatives
    for (const entry of entries) {
      await sql`UPDATE guests SET response = ${entry.response} WHERE full_name = ${entry.full_name};`;
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
