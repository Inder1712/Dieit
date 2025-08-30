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
    photo: "", // ✅ Student Photo
    aadhar: "", // ✅ Aadhar Card
    qualificationDoc: "", // ✅ Last Qualification Document
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value ?? "" });
  };

  // ✅ reusable function for file uploads
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "photo" | "aadhar" | "qualificationDoc"
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob || "",
        gender: form.gender || "",
        address: form.address || "",
        qualification: form.qualification.trim(),
        course: form.course || "",
        message: form.message || "",
        photo: form.photo || "",
        aadhar: form.aadhar || "",
        qualificationDoc: form.qualificationDoc || "",
        createdAt: serverTimestamp(),
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
        photo: "",
        aadhar: "",
        qualificationDoc: "",
      });
    } catch (err: any) {
      console.error("🔥 Firestore addDoc error:", err);
      alert(`❌ Failed to submit. ${err.message || err.code}`);
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
          and more. Build your career with expert guidance and hands-on
          learning.
        </p>
      </section>


      {/* Admission Form */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Apply / Enquiry</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-gray-200"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            rows={2}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Previous Qualification"
            value={form.qualification}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">Select Course</option>
            <option value="DCA">DCA</option>
            <option value="O Level">O Level</option>
            <option value="Python">Python</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {/* ✅ Uploads */}
          <div>
            <label className="block mb-2 font-medium">Upload Your Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "photo")}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {form.photo && (
              <img
                src={form.photo}
                alt="Photo Preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Upload Aadhar Card</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange(e, "aadhar")}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {form.aadhar && (
              <img
                src={form.aadhar}
                alt="Aadhar Preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Upload Last Qualification Document
            </label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange(e, "qualificationDoc")}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {form.qualificationDoc && (
              <img
                src={form.qualificationDoc}
                alt="Qualification Doc Preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
    </div>
  );
}
