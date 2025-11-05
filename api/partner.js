// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// export default async function handler(req, res) {
//   // Allow only POST requests
//   if (req.method !== "POST") {
//     return res.status(405).json({ ok: false, error: "Method not allowed" });
//   }

//   try {
//     const { name, phone, email } = req.body;

//     // Validate inputs
//     if (!name || !phone || !email) {
//       return res.status(400).json({ ok: false, error: "All fields are required" });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ ok: false, error: "Invalid email address" });
//     }

//     // Insert into Supabase
//     const { error } = await supabase.from("partners").insert([{ name, phone, email }]);
//     if (error) throw error;

//     // Success
//     res.status(200).json({ ok: true, message: "Submitted successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ ok: false, error: "Server error" });
//   }
// }
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // ✅ Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body;

    // ✅ Validate input
    if (!name || !phone || !email) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // ✅ Insert into Supabase
    const { error } = await supabase
      .from("partners")
      .insert([{ name, phone, email }]);

    if (error) {
      console.error("Supabase error:", error);
      return res
        .status(500)
        .json({ ok: false, error: "Database insert failed" });
    }

    // ✅ Try to send email, but don’t crash if it fails
    try {
      await resend.emails.send({
        from: "Cravy <onboarding@resend.dev>", // free verified sender
        to: "tarrunkripa@gmail.com",
        subject: "New Partner Inquiry",
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`,
      });
    } catch (emailError) {
      console.error("Resend error:", emailError);
      // Don’t block user — still mark as successful
      return res
        .status(200)
        .json({ ok: true, warning: "Email failed but data saved." });
    }

    // ✅ Everything worked
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}

