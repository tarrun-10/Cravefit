import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-black website-background">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Gallery />

      {/* Partner with Us Section */}
      <section id="partner" className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-500 text-center">Partner with Us</h2>
          <p className="mb-6 text-white text-center">
            Interested in franchising or collaborating with our cafe brand? Fill out the form below and we’ll get in touch to discuss partnership opportunities.
          </p>
          {/* <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}> */}
          {/* <form
                className="flex flex-col gap-4 max-w-md mx-auto"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;

                  const name = form.querySelector('input[placeholder="Name"]').value;
                  const phone = form.querySelector('input[placeholder="Mobile Number"]').value;
                  const email = form.querySelector('input[placeholder="Email Address"]').value;

                  try {
                    const response = await fetch("/api/partner", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name, phone, email }),
                    });

                    const data = await response.json();

                    if (data.ok) {
                      alert("✅ Thank you! We’ll get in touch soon.");
                      form.reset();
                    } else {
                      alert("⚠️ " + data.error);
                    }
                  } catch (err) {
                    alert("❌ Network error. Please try again.");
                  }
                }}
              >
            <input
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              type="tel"
              placeholder="Mobile Number"
              required
            />
            <input
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              type="email"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 font-semibold shadow"
            >
              Request Callback
            </button>
          </form> */}
              <form
              className="flex flex-col gap-4 max-w-md mx-auto"
              onSubmit={async (e) => {
                e.preventDefault();

                // Create a FormData object
                const formData = new FormData(e.currentTarget);

                // Get values by their `name` attributes
                const name = formData.get("name");
                const phone = formData.get("phone");
                const email = formData.get("email");

                // Validate
                if (!name || !phone || !email) {
                  alert("Please fill in all fields.");
                  return;
                }

                try {
                  const response = await fetch("/api/partner", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, phone, email }),
                  });

                  const data = await response.json();
                  if (data.ok) {
                    alert("✅ Thank you! We'll get in touch soon.");
                    e.currentTarget.reset();
                  } else {
                    alert("⚠️ " + data.error);
                  }
                } catch (err) {
                  console.error(err);
                  alert("❌ Something went wrong. Please try again later.");
                }
              }}
            >
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
                className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 font-semibold shadow"
              >
                Request Callback
              </button>
            </form>


        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;