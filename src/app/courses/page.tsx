import { courseData } from "@/app/api/data";
import { FaUserGraduate, FaStar, FaRegStar, FaRegClock } from "react-icons/fa";

export default function CoursesPage() {
  return (
    <div className="px-6 py-12 bg-slateGray min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        Our Courses
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-course-shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={course.imgSrc}
              alt={course.heading}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold text-midnight_text">
                  {course.heading}
                </h3>
                <p className="text-sm text-grey mb-3">{course.name}</p>

                {/* Stats */}
                <div className="flex items-center text-sm text-grey mb-3">
                  <FaUserGraduate className="mr-1 text-primary" />
                  {course.students} Students
                </div>

                <div className="flex items-center text-sm text-grey mb-3">
                  <FaRegClock className="mr-1 text-primary" />
                  {course.classes} Classes
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-secondary mb-3">
                  ${course.price}
                </p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < Math.floor(course.rating) ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                  <span className="ml-2 text-sm text-grey">
                    {course.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
