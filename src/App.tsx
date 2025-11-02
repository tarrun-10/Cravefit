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
          <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
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
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;