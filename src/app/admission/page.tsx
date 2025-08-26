// src/app/admissions/page.tsx
"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdmissionsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    qualification: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value ?? "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make sure we never pass undefined to Firestore
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob || "",          // string ok
        gender: form.gender || "",
        address: form.address || "",
        qualification: form.qualification.trim(),
        course: form.course || "",
        message: form.message || "",
        createdAt: serverTimestamp(), // ✅ safer than client clock
      };

      await addDoc(collection(db, "Admissions"), payload);

      alert("✅ Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        qualification: "",
        course: "",
        message: "",
      });
    } catch (err: any) {
      console.error("🔥 Firestore addDoc error:", err);
      const msg =
        (err && (err.message || err.code)) || "Unknown error";
      alert(`❌ Failed to submit. ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-28 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Admissions Open</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Enroll now in our industry-relevant programs like{" "}
          <span className="font-semibold">
            DCA, O Level, Python, HTML, CSS, JavaScript
          </span>{" "}
          and more. Build your career with expert guidance and hands-on learning.
        </p>
      </section>

      {/* Admission Process */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Admission Process</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {["Fill the Application Form", "Submit Required Documents", "Pay Fees & Start Classes"].map(
            (step, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{idx + 1}</div>
                <p className="text-gray-700">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Admission Form */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Apply / Enquiry</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-gray-200"
        >
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3" />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3" />
          <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3" />
          <select name="gender" value={form.gender} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} rows={2} className="w-full border border-gray-300 rounded-lg p-3" />
          <input type="text" name="qualification" placeholder="Previous Qualification" value={form.qualification} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3" />
          <select name="course" value={form.course} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3">
            <option value="">Select Course</option>
            <option value="DCA">DCA</option>
            <option value="O Level">O Level</option>
            <option value="Python">Python</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-lg p-3" />
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50">
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
    </div>
  );
}
