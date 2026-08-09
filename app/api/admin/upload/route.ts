import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, PRODUCT_IMAGES_BUCKET } from "@/lib/supabase-admin";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabaseAdmin.storage
    .from(PRODUCT_IMAGES_BUCKET)
    .upload(path, buffer, { contentType: file.type, upsert: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = supabaseAdmin.storage.from(PRODUCT_IMAGES_BUCKET).getPublicUrl(path);

  return NextResponse.json({ url: data.publicUrl });
}
