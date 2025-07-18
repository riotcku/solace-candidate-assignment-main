import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET() {
  try {
    const data = await db.select().from(advocates);
    return Response.json({ data });
  } catch (e) {
    return Response.json({
      error: "Failed to fetch advocates. You may need to seed the data.",
      status: "500",
    });
  }
}
