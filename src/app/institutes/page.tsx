"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function InstitutesPage() {
  const images = [
    "/images/institutes/institue1.jpeg",
    "/images/institutes/institue2.jpeg",
    "/images/institutes/institue3.jpeg",
    "/images/institutes/institue4.jpeg",
    "/images/institutes/institue5.jpeg",
    "/images/institutes/institue6.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gray-50 min-h-screen pt-32 mt-12 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Dream Institute of Education & Information Technology
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
            Empowering students through quality education, vocational training,
            skill development, and innovation.
          </p>
        </div>

        {/* Main Card */}
        {/* Main Card */}
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

  {/* Image Slider */}
  <div className="relative w-full h-[300px] md:h-[500px] lg:h-[650px] overflow-hidden">
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Institute ${index + 1}`}
        fill
        priority={index === 0}
        className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
          index === currentImage ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Previous */}
    <button
      onClick={prevImage}
      className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
    >
      ❮
    </button>

    {/* Next */}
    <button
      onClick={nextImage}
      className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
    >
      ❯
    </button>

    {/* Counter */}
    <div className="absolute top-5 right-5 bg-white/90 px-4 py-2 rounded-full font-semibold shadow">
      {currentImage + 1} / {images.length}
    </div>

    {/* Dots */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`transition-all duration-300 rounded-full ${
            currentImage === index
              ? "w-8 h-3 bg-white"
              : "w-3 h-3 bg-white/60 hover:bg-white"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-5xl mx-auto px-8 py-12">

    <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
      About DIEIT
    </h2>

    <div className="space-y-6 text-gray-700 leading-8 text-justify text-lg">
      <p>
        Dream Institute of Education and Information Technology (DIEIT),
        situated at Up Sampada, Shubhkhera, Paonta Sahib, District Sirmaur,
        Himachal Pradesh – 173025, is a professional institution dedicated to
        providing quality technical, vocational and skill-based education.
      </p>

      <p>
        Registered under the Himachal Pradesh Society Registration Act 2006,
        DIEIT was established by experienced academicians and professionals
        committed to excellence in education, ethics and innovation.
      </p>

      <p>
        The institute has earned the trust of students and parents through its
        educational and charitable initiatives. It offers programmes in
        Computer Science, Information Technology, Health and Skill Development
        with a strong focus on practical learning.
      </p>

      <p>
        One of the institute's major achievements is the establishment of one
        of the largest Skill Development Centres (SDC) in Himachal Pradesh,
        aligned with the Skill India Mission. Students receive industry-based
        training using modern technologies, making them job-ready
        professionals.
      </p>

      <p>
        Today, students from Himachal Pradesh, Punjab, Haryana, Chandigarh,
        Uttar Pradesh and Uttarakhand choose DIEIT for its quality education
        and career-oriented learning environment.
      </p>
    </div>

    {/* Information Card */}
    <div className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg border">

      <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Institute Information
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h4 className="font-semibold text-xl mb-2">📍 Address</h4>
          <p className="text-gray-700 leading-7">
            Up Sampada, Shubhkhera
            <br />
            Paonta Sahib
            <br />
            District Sirmaur
            <br />
            Himachal Pradesh – 173025
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-2">👨‍💼 Chairman</h4>
          <p className="text-gray-700">
            Sh. Vineet Kumar
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-2">📞 Phone</h4>
          <a
            href="tel:+919876543210"
            className="text-blue-700 hover:underline"
          >
            +91 98765 43210
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-2">✉️ Email</h4>
          <a
            href="mailto:info@dieit.in"
            className="text-blue-700 hover:underline"
          >
            info@dieit.in
          </a>
        </div>

      </div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}