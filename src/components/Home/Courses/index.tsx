"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Course {
  id: string;
  heading: string;
  description: string;
  price: number;
  rating: number;
  photo: string;
  createdAt: any;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const courseList: Course[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Course, "id">),
        }));
        setCourses(courseList);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Icon
            key={`full-${i}`}
            icon="tabler:star-filled"
            className="text-yellow-500 text-xl inline-block"
          />
        ))}
        {halfStars > 0 && (
          <Icon
            icon="tabler:star-half-filled"
            className="text-yellow-500 text-xl inline-block"
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Icon
            key={`empty-${i}`}
            icon="tabler:star-filled"
            className="text-gray-400 text-xl inline-block"
          />
        ))}
      </>
    );
  };

  return (
    <section id="courses">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            Popular courses.
          </h2>
          <Link
            href={"/courses"}
            className="text-primary text-lg font-medium hover:tracking-widest duration-500"
          >
            Explore courses&nbsp;&gt;&nbsp;
          </Link>
        </div>
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id}>
              <div className="bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-[550px] flex flex-col">
                <div className="relative rounded-3xl">
                  <img
                    src={course.photo}
                    alt={course.heading}
                    className="m-auto h-[262px] w-full object-cover rounded-3xl"
                  />
                  <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                    <h3 className="text-white uppercase text-center text-sm font-medium">
                      best <br /> seller
                    </h3>
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="px-3 pt-6 flex-1 overflow-hidden">
                  <Link
                    href="#"
                    className="text-2xl font-bold text-black max-w-[75%] inline-block"
                  >
                    {course.heading}
                  </Link>

                  <div className="mt-4 text-base font-normal text-black/75 h-[80px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    {course.description}
                  </div>

                  <div className="flex justify-between items-center py-6 border-b">
                    <div className="flex items-center gap-4">
                      <h3 className="text-red-700 text-2xl font-medium">
                        {course.rating}
                      </h3>
                      <div className="flex">{renderStars(course.rating)}</div>
                    </div>
                    <h3 className="text-3xl font-medium">${course.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
