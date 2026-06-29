"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting DIEIT. We will get back to you soon.");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white pt-36 pb-0 px-6 text-center">
        <h1 className="text-5xl font-bold mb-5">Contact Us</h1>

        {/* <p className="max-w-3xl mx-auto text-lg text-blue-100">
          We'd love to hear from you. Whether you're looking for admission
          information, course details, or general assistance, our team is ready
          to help.
        </p> */}
      </section>


      {/* Administrative Contacts */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Key Administrative Contacts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              Sh. Vineet Kumar
            </h3>
            <p className="text-gray-500">President</p>
            <p className="mt-4">📧 vk.dieit@gmail.com</p>
            <p>📞 9459532941</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              Sh. Sushil Sharma
            </h3>
            <p className="text-gray-500">Secretary</p>
            <p className="mt-4">📧 ss.dieit@gmail.com</p>
            <p>📞 8628088748</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              Ms. Santosh Kumari
            </h3>
            <p className="text-gray-500">Treasurer</p>
            <p className="mt-4">📧 santosh.dieit@gmail.com</p>
            <p>📞 9816786948</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              Sh. K.D. Sharma
            </h3>
            <p className="text-gray-500">Director cum HOD</p>
            <p className="mt-4">📧 kdsharma@dieit.in</p>
            <p>📞 9816332940</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              Sh. Baldev Thakur
            </h3>
            <p className="text-gray-500">
              Assistant Director (Admin)
            </p>
            <p className="mt-4">📧 baldevsangta3@gmail.com</p>
            <p>📞 8894354152</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              Sh. Manish Kumar
            </h3>
            <p className="text-gray-500">
              Senior Assistant (Registration)
            </p>
            <p className="mt-4">📧 manishmandwach@gmail.com</p>
            <p>📞 8278764212</p>
          </div>

        </div>

      </section>

      {/* Study Centres */}
      <section className="bg-blue-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            DIEIT Study Centres
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700">
                DIEIT Sangrah
              </h3>

              <p className="mt-4 text-gray-600">
                District Sirmaur,
                <br />
                Himachal Pradesh - 173023
              </p>

              <p className="mt-4">📞 9459532941</p>
              <p>📧 dieitinstitute00000@gmail.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700">
                DIEIT Shillai
              </h3>

              <p className="mt-4 text-gray-600">
                District Sirmaur,
                <br />
                Himachal Pradesh - 173027
              </p>

              <p className="mt-4">📞 01702-292955</p>
              <p>📧 dieit03294@gmail.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700">
                DIEIT Nahan
              </h3>

              <p className="mt-4 text-gray-600">
                District Sirmaur,
                <br />
                Himachal Pradesh - 173001
              </p>

              <p className="mt-4">📞 01702-292277</p>
              <p>📧 dieit03294@gmail.com</p>
            </div>

          </div>

        </div>

      </section>
      
      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10">

        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-8">
            Feel free to contact us using the information below or send us a
            message through the contact form.
          </p>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-gray-600 mt-2">
                HO: At Up Sampada Shubhkhera,
                <br />
                Paonta Sahib,
                <br />
                District Sirmaur,
                <br />
                Himachal Pradesh – 173025
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">☎ Board Number</h3>
              <p className="text-gray-600 mt-2">01704-292277</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                📞 Admission / General Enquiry
              </h3>
              <p className="text-gray-600 mt-2">01704-292508</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">✉ Email</h3>
              <p className="text-gray-600 mt-2">
                info@dieitpaonta.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">🗺 Google Maps</h3>

              <a
                href="https://maps.app.goo.gl/mQoyPvYsM98crk24A?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                View Our Location
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}