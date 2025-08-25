"use client";

import React, { useEffect, useMemo, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";

type NoticeDoc = {
  id?: string;
  heading?: string;
  description?: string;
  link?: string;
  createdAt?: Timestamp;
};

const NoticeCard = ({ heading = "", description = "", link, createdAt }: NoticeDoc) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 200;

  const isLong = description.length > limit;
  const displayText =
    expanded || !isLong ? description : description.slice(0, limit) + "...";

  const formattedDate = createdAt ? createdAt.toDate().toLocaleString() : "";

  return (
    <div className="w-full px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 shadow 
                    text-left text-sm sm:text-base font-medium text-slate-800 
                    break-words leading-snug flex flex-col">
      {heading && <h3 className="text-lg font-bold mb-1">{heading}</h3>}

      <span>{displayText || "No description available"}</span>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-1 text-primary font-semibold hover:underline focus:outline-none self-start"
        >
          {expanded ? " Show Less" : " Read More"}
        </button>
      )}

      {link && link.trim() !== "" && (
        <a
          href={link.startsWith("http") ? link : `https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold mt-2 break-all hover:underline"
        >
          {link}
        </a>
      )}

      {formattedDate && (
        <p className="text-[10px] text-slate-500 mt-1">{formattedDate}</p>
      )}
    </div>
  );
};

const Hero = () => {
  const [notices, setNotices] = useState<NoticeDoc[]>([]);
  const [loading, setLoading] = useState(true);

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

  const PER_SLIDE = 3; // seconds per notice
  const cycleSeconds = useMemo(() => {
    const count = Math.max(1, notices.length);
    return count * PER_SLIDE;
  }, [notices.length]);

  return (
    <section id="home-section" className="bg-slateGray">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* Notice Board */}
          <div className="col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-lg h-72 rounded-2xl shadow-xl bg-white border-2 border-slate-400 overflow-hidden flex flex-col">
              <div className="bg-slate-800 text-white text-center py-2 font-bold text-lg tracking-wide border-b border-slate-500">
                📌 Notice Board
              </div>

              <div className="flex-1 relative flex items-center justify-center px-2 sm:px-6 overflow-hidden">
                {loading && (
                  <div className="text-slate-500 text-sm">Loading notices…</div>
                )}

                {!loading && notices.length === 0 && (
                  <div className="text-slate-500 text-sm">No notices yet.</div>
                )}

                {!loading &&
                  notices.map((notice, i) => (
                    <div
                      key={notice.id ?? i}
                      className={`absolute inset-0 flex items-center justify-center p-2 ${
                        notices.length > 1 ? "animate-notice" : ""
                      }`}
                      style={
                        notices.length > 1
                          ? {
                              animationDuration: `${cycleSeconds}s`,
                              animationDelay: `${i * PER_SLIDE}s`,
                              willChange: "opacity, transform",
                            }
                          : {}
                      }
                    >
                      <NoticeCard
                        heading={notice.heading}
                        description={notice.description}
                        link={notice.link}
                        createdAt={notice.createdAt}
                      />
                    </div>
                  ))}
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
