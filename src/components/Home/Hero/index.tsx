"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";

type NoticeDoc = {
  id?: string;
  heading?: string;
  description?: string;
  link?: string;
  image?: string;
  createdAt?: Timestamp;
};

const NoticeCard = ({ heading = "", description = "", link, image, createdAt }: NoticeDoc) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 200;

  const isLong = description.length > limit;
  const displayText =
    expanded || !isLong ? description : description.slice(0, limit) + "...";

  const formattedDate = createdAt ? createdAt.toDate().toLocaleString() : "";

  return (
    <div className="w-full h-full px-3 py-2 rounded-lg text-left text-sm sm:text-base font-medium text-slate-800 break-words leading-snug flex flex-col overflow-hidden">
      {/* Heading */}
      {heading && (
        <h3 className="text-lg font-bold mb-2 line-clamp-2 break-words">
          {heading}
        </h3>
      )}

      {/* Image */}
      {/* Image */}
{image && (
  <div className="w-full max-h-32 mb-2 flex items-center justify-start">
    <img
      src={image}
      alt={heading || "notice image"}
      className="max-h-32 object-contain rounded"
    />
  </div>
)}


      {/* Description */}
      <div className="text-sm text-slate-700 mb-2 overflow-y-auto max-h-32 pr-1 no-scrollbar">
        {displayText || "No description available"}
      </div>

      {/* Read More */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-1 text-primary font-semibold hover:underline focus:outline-none self-start"
        >
          {expanded ? " Show Less" : " Read More"}
        </button>
      )}

      {/* Link */}
      {link && link.trim() !== "" && (
        <a
          href={link.startsWith("http") ? link : `https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold mt-2 break-all hover:underline max-h-10 overflow-y-auto no-scrollbar"
        >
          {link}
        </a>
      )}

      {/* Date */}
      {formattedDate && (
        <p className="text-[10px] text-slate-500 mt-2">{formattedDate}</p>
      )}
    </div>
  );
};

const Hero = () => {
  const [notices, setNotices] = useState<NoticeDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const q = query(collection(db, "notifications"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(
      q,
      (snap) => {
        const data = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<NoticeDoc, "id">),
        }));
        setNotices(data);
        setLoading(false);
      },
      (err) => {
        console.error("Failed to load notices:", err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  // ✅ Rotate notices automatically
  useEffect(() => {
    if (notices.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % notices.length);
      }, 4000); // 4s per notice
      return () => clearInterval(interval);
    }
  }, [notices]);

  return (
    <section id="home-section" className="bg-slateGray">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* Notice Board */}
          <div className="col-span-6 flex justify-center order-1 lg:order-2">
  <div className="relative w-full max-w-lg h-[380px] rounded-2xl shadow-xl bg-white border-2 border-slate-400 overflow-hidden flex flex-col">
    <div className="bg-slate-800 text-white text-center py-2 font-bold text-lg tracking-wide border-b border-slate-500">
      📌 Notice Board
    </div>

    <div className="flex-1 flex items-center justify-center px-2 sm:px-4 overflow-hidden">
      {loading && <div className="text-slate-500 text-sm">Loading notices…</div>}
      {!loading && notices.length === 0 && (
        <div className="text-slate-500 text-sm">No notices yet.</div>
      )}

      {!loading && notices.length > 0 && (
        <div
          key={notices[currentIndex]?.id ?? currentIndex}
          className="w-full h-full animate-fade"
        >
          <NoticeCard {...notices[currentIndex]} />
        </div>
      )}
    </div>
  </div>
</div>

          {/* Text Section */}
          <div className="col-span-6 flex flex-col gap-8 order-2 lg:order-1">
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0">
              Advance your skills with us.
            </h1>
            <h3 className="text-black/70 text-lg">100+ YEAR OF EXPERIENCE</h3>
            <h3 className="text-black/70 text-lg">15+ COURSES</h3>
            <h3 className="text-black/70 text-lg">1000+ STUDENTS</h3>

            <div className="flex items-center justify-between pt-6">
              <div className="flex gap-2">
                <img src={`images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                <p className="text-sm sm:text-lg text-black">Flexible</p>
              </div>
              <div className="flex gap-2">
                <img src={`images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                <p className="text-sm sm:text-lg text-black">Learning path</p>
              </div>
              <div className="flex gap-2">
                <img src={`images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                <p className="text-sm sm:text-lg text-black">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
