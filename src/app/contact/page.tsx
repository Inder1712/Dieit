// src/app/contact/page.tsx
"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-28 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Reach out to DIEIT Paonta Sahib – We’re here to assist you.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions or want to know more about our courses? Contact us using the details below or send us a message directly.
          </p>
          <ul className="space-y-5 text-gray-700 text-lg">
            <li>
              <strong>Address:</strong><br />
              DIEIT Institute, Near Shamsherpur, NH-72, Paonta Sahib, Himachal Pradesh, India
            </li>
            <li>
              <strong>Phone:</strong><br />
              +91-XXXXXXXXXX
            </li>
            <li>
              <strong>Email:</strong><br />
              info@dieitpaonta.com
            </li>
            <li>
              <strong>Google Maps:</strong><br />
              <a
                href="https://goo.gl/maps/ZcCZKw27NnEyB6eT6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
