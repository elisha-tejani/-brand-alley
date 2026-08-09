import { NextRequest, NextResponse } from "next/server";
import { setAdminSessionCookie } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (typeof password !== "string" || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  await setAdminSessionCookie();
  return NextResponse.json({ ok: true });
}
