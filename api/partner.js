import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body;

    // Validate inputs
    if (!name || !phone || !email) {
      return res.status(400).json({ ok: false, error: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email address" });
    }

    // Insert into Supabase
    const { error } = await supabase.from("partners").insert([{ name, phone, email }]);
    if (error) throw error;

    // Success
    res.status(200).json({ ok: true, message: "Submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
}
