// app/api/health/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // You can add more complex checks here if needed,
  // e.g., database connection, external API reachability.
  // For a basic health check, just returning 200 OK is sufficient.

  try {
    // Example: Check if a database connection is alive (if you have one)
    // await db.ping(); // Replace with your actual database check

    return NextResponse.json(
      { status: 'OK', timestamp: new Date().toISOString() },
      { status: 200 }
    );
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { status: 'ERROR', message: error.message },
      { status: 500 }
    );
  }
}