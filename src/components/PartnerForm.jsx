import { useState } from "react";

export default function PartnerForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | "warning"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");

    try {
      // ✅ Use full API URL when deployed on Vercel
      const res = await fetch("https://YOUR-APP-NAME.vercel.app/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });

      const data = await res.json();

      if (data.ok) {
        e.target.reset();
        if (data.warning) {
          setStatus("warning");
        } else {
          setStatus("success");
        }
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="partner" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-500 text-center">
          Partner with Us
        </h2>
        <p className="mb-6 text-white text-center">
          Interested in franchising or collaborating with our cafe brand?
          Fill out the form below and we’ll get in touch to discuss partnership opportunities.
        </p>

        <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Mobile Number"
            required
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 px-6 py-2 rounded font-semibold shadow ${
              loading
                ? "bg-gray-400"
                : "bg-yellow-500 hover:bg-yellow-600 text-black"
            }`}
          >
            {loading ? "Submitting..." : "Request Callback"}
          </button>

          {/* ✅ Status messages */}
          {status === "success" && (
            <p className="text-green-400 text-center mt-2">
              ✅ Thank you! We’ll contact you soon.
            </p>
          )}
          {status === "warning" && (
            <p className="text-yellow-400 text-center mt-2">
              ⚠️ Form saved, but email notification failed.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
