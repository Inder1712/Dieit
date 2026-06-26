// src/app/about/page.tsx
"use client";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen mt-12 md:pt-28">

      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-500 mt-2">
          Dream Institute of Education and Information Technology (DIEIT)
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-6 space-y-8">

        {/* Card */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <p className="text-gray-700 leading-relaxed">
      Dream Institute or Education and Information Technology (DIEIT)  at Up Sampada Shubhkhera, Paonta Sahib, District Sirmaur, Himachal Pradesh-173025 has been registered on 18-05-2028 under Registrar of Himachal Pradesh Society Registration  Act 2006. The promoters of the Society are highly qualified persons, having best experience in the field of professional and vocational education, who are dedicated to produce excellent and quality technical education based on moral values and ethics. The main objective of the society is to develop skilled and educated manpower in the area where there is acute shortage.
In a very small span, the DIEIT has been able to achieve success and command respect in the eyes of the people of the region with its non-profit educational and charitable activities in the region. The aim of the Society is to develop efficient manpower especially in the field Computer Science, Skill Development and Health. Hon’ble Chairman, Sh. Vineet Kumar .
 DIEIT  a Of Professional Institutions encourages innovation in IT education and entrepreneurship. It provides the drive, intelligence, and contemporary infrastructure to all its stakeholders and inspires them to be inventive, ingenious, and imaginative, whether it is education or entrepreneurship. This vision has led to the successful development of our “Skill Development Centre” which is by far one of the largest “SDC” across the state. The SDC or the Centre of Excellence has been established on the lines of “Skill India Mission”, where the concept has been designed to provide learning which is oriented on practical and is driven by industry expertise so that the students have the learning on latest technologies and skill sets that will help them to become professionals.
The institutions run by the SOCIETY, command respect and affection in Himachal Pradesh. The students come from Himachal Pradesh, Haryana, Punjab, Chandigarh, Uttar Pradesh, Uttrakhand, , etc. to pursue IT and Vocational courses run by the DIEIT.
          </p>
        </div>

        {/* <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <p className="text-gray-700 leading-relaxed">
            In a very small span, DIEIT has achieved success and respect through its non-profit
            educational activities. The aim is to develop skilled manpower especially in Computer
            Science, Skill Development and Health.
          </p>
        </div> */}

        {/* <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <p className="text-gray-700 leading-relaxed">
            DIEIT encourages innovation in IT education and entrepreneurship with modern infrastructure.
            The Skill Development Centre follows the Skill India Mission and focuses on practical,
            industry-oriented learning.
          </p>
        </div> */}

        {/* Mission / Vision / Objective */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Mission</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
            By providing emotional, cultural and spiritual integration to our youth, we can achieve our objective of their holistic development. The qualities of commitment and dedication empower them to evolve as role models for the industry, business world and . Here at DIEIT  of Professional Institutions (DPI), we offer unique learning opportunities and a plethora of avenues to learn and practice these specific skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Vision</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
             DIEIT  has defined the mission statement not only by writing a few words or lines but has made it visible through its actions in education and charitable works in the region. The mission of the DIEIT  is to develop skilled, educated, and dedicated manpower in the area where there is a need especially in the field of  Computer Education, Skill Development etc. 
The DIEIT  is committed to imparting career oriented and quality education. It believes in “the making of better human beings” by inculcating moral and ethical values in their personalities.” DIEIT wants to promote education in the most modern way, and to introduce new and latest courses keeping in mind the need of the hour. Its mission is to be the best in infrastructural facilities, selection of highly educated, trained, and experienced faculty having orientation towards research activities and possessing an ideal Education-Industry interface.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Objective</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
            DIEIT  endeavors to encourage and provide educational facilities for the latest courses, which are need of the hour. All the courses being run by the DIEIT  in tune with the mission and vision of the Society. The Society is committed to developing its students and to help them become practicing executives, innovators, catalysts, managers, entrepreneurs, pharmacists, engineers and architects for building the nation
To provide serene and secure environment for education. To provide quality education to students. To provide Education-Industry partnership for the students. To constantly upgrade the infrastructural facilities in the campus. To inculcate the moral and ethical values in the education system. To constantly encourage activities for final placement of students. To promote spirit of creativity, innovation and excellence.
            </p>
          </div>

        </div>

        {/* Chairman Message */}
        <div className=" text-center ">
          <img
            src="/images/mentor/image.png"
            alt="Director"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
          />
          {/* <h2 className="text-xl font-semibold mt-4">Director</h2> */}
          {/* <p className="text-gray-600 mt-2">
            Commitment to discipline, innovation and student success.
          </p> */}
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold mb-4">Chairman Message</h2>

          <p className="text-gray-700 mb-4">
           Dear Students, <br />
Congratulations for making the right choice to select the DIEIT. DIEIT aims at empowering Himachal by promoting technical education. Himachal does have a very high literacy rate, but at the same time, it is also important to promote IT and Vocational  education in the state for a brighter future and that is what our institution wants to achieve.
Our varied courses ensure qualitative education which can impart not just education but glorious job opportunities and DIEIT will not end up disappointing you as our courses will fetch you the right jobs in the right concerns. Those bothered about the affordability of our courses will be glad to know that BIT has a number of scholarship program in place.
This implies that if you are ready to work hard to improve your future, DIEIT can impart you IT education with money hardly a constraint. Join our mission on the path of empowering Himachal with the IT education and we will look forward to meeting you at BIT.

          </p>

          {/* <p className="text-gray-700 mb-4">
            Our courses ensure quality education and career opportunities. Scholarship support is also available.
          </p> */}

          <p className="text-gray-700 font-medium">
            Regards,<br />
            <span className="text-blue-600 font-bold">VINEET KUMAR</span><br />
            Chairman
          </p>
        </div>

        {/* Director (Image only kept, improved UI) */}
        {/* <div className="bg-white shadow-lg rounded-xl p-8 text-center border">
          <img
            src="/images/mentor/user3.png"
            alt="Director"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
          />
          <h2 className="text-xl font-semibold mt-4">Director</h2>
          <p className="text-gray-600 mt-2">
            Commitment to discipline, innovation and student success.
          </p>
        </div> */}

      </div>
    </div>
  );
}