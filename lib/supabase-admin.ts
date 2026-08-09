import { createClient } from "@supabase/supabase-js";

// Server-only client using the service role key. Never import this from a
// "use client" component — it has full storage access and must stay on the server.
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

export const PRODUCT_IMAGES_BUCKET = "product-images";
