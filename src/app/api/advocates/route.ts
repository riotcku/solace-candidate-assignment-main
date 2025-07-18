import db from "../../../db";
import { advocates } from "../../../db/schema";
// import { advocateData } from "../../../db/seed/advocates";
// import { NextRequest } from "next/server";
// import { Advocate } from "@/app/types/advocate";

export async function GET() {
  try {
    const data = await db.select().from(advocates);
    return Response.json({ data });
  } catch (e) {
    return Response.json({ error: "Failed to fetch advocates", status: "500" });
  }
}
