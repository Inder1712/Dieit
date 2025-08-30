"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FaUserGraduate, FaStar, FaRegStar, FaRegClock } from "react-icons/fa";
import { useRouter } from "next/navigation"; // 👈 import router

interface Course {
  id: string;
  heading: string;
  description?: string;
  photo: string; // stored as string (base64 or URL)
  students?: number;
  classes?: number;
  price?: number;
  rating?: number;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // 👈 initialize router

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses")); 
        const courseList: Course[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Course[];
        setCourses(courseList);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 bg-slateGray min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        Our Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-600">No courses available.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-course-shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => router.push("/admission")} // 👈 redirect on click
            >
              {/* Image */}
              {course.photo ? (
                <img
                  src={course.photo}
                  alt={course.heading}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold text-midnight_text">
                    {course.heading}
                  </h3>
                  <p className="text-sm text-grey mb-3">
                    {course.description ?? "No description available"}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center text-sm text-grey mb-3">
                    <FaUserGraduate className="mr-1 text-primary" />
                    {course.students ?? 0} Students
                  </div>

                  <div className="flex items-center text-sm text-grey mb-3">
                    <FaRegClock className="mr-1 text-primary" />
                    {course.classes ?? 0} Classes
                  </div>

                  {/* Price */}
                  <p className="text-lg font-bold text-secondary mb-3">
                    ${course.price ?? 0}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < Math.floor(course.rating ?? 0) ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                    <span className="ml-2 text-sm text-grey">
                      {(course.rating ?? 0).toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Button */}
                {/* <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                  Enroll Now
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
