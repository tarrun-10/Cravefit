import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  console.log("📩 Partner API hit:", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const { error } = await supabase.from("partners").insert([{ name, phone, email }]);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ ok: false, error: "Database insert failed" });
    }

    console.log("✅ Insert successful:", { name, phone, email });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Server crash:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
