import { NextRequest } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { generateAdvocateData } from "../../../db/seed/advocates";

export async function POST(request: NextRequest) {
  try {
    const mockAdvocateData = generateAdvocateData(100);
    const insertedData = await db.insert(advocates).values(mockAdvocateData).returning();
    return Response.json({
      advocates: insertedData,
    })
  } catch(e) {
    console.error("Error while seeding database", e);
    return Response.json({ error: `Database Seeding error ${e}`}, { status: 500 });
  }
}
