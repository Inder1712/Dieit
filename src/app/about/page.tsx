// src/app/about/page.tsx
"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-28 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          DIEIT Paonta Sahib – Empowering technical excellence since 1964.
        </p>
      </section>

      {/* Institute Image & Intro */}
      <section className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/images/institutes/institue1.jpeg" // Replace with actual image path
            alt="DIEIT Paonta Sahib"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover h-[350px]"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story & Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Established in 1964, the Government Industrial Training Institute (DIEIT), Paonta Sahib,
            has been dedicated to providing industry-relevant technical training to the youth of
            Himachal Pradesh and beyond. Situated near Shamsherpur on NH-72—just 45 km from Nahan
            and Dehradun—it serves as a cornerstone for vocational education in the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Affiliated with NCVT/DGET, our mission is to deliver hands-on education that bridges the
            gap between academics and employment—preparing students to excel in engineering and
            allied trades.
          </p>
        </div>
      </section>

      {/* Director Message */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="/images/mentor/user3.png" // Replace with actual image path
              alt="Director Mr. K.D."
              width={250}
              height={250}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Message from the Director</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At DIEIT Paonta Sahib, we believe in nurturing talent through a blend of traditional
              values and modern technical skills. Our goal is to equip students not only with
              knowledge but also with the confidence to excel in competitive industries.
            </p>
            <p className="text-gray-700">
              Under my leadership, we remain committed to innovation, discipline, and a student-first
              approach—ensuring that each individual leaves our institute ready to contribute meaningfully
              to society.
            </p>
            <p className="mt-4 font-semibold text-blue-600">— Mr. K.D., Director</p>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Courses & Training Programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Electrician",
            "Fitter",
            "Instrument Mechanic",
            "Mechanic (Motor Vehicle)",
            "Welder",
            "Refrigeration & AC Mechanic",
            "Plastic Processing Operator",
            "Carpenter",
            "Driver-cum-Mechanic",
            "Stenographer & Secretarial Assistant (Hindi)",
            "Turner",
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 border border-gray-200">
              <h3 className="text-lg font-medium text-blue-600">{course}</h3>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Trades offered are recognized under NCVT/DGET certification.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 px-6 text-center text-white " >
        <h2 className="text-2xl font-bold mb-4">Join Us Today</h2>
        <p className="mb-6">
          Explore our courses, check the admissions process, or reach out—take your first step
          toward technical excellence.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/admissions"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
          >
            Admissions
          </a>
          <a
            href="/contact"
            className="bg-gray-100 text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
