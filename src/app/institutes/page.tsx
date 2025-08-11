// src/app/institutes/page.tsx
import Image from "next/image";

interface Institute {
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const institutes: Institute[] = [
  {
    name: "Downtown Learning Center",
    address: "123 Main Street, City Center, New Delhi, India",
    phone: "+91 98765 43210",
    email: "downtown@institute.com",
    image: "/images/institutes/institue1.jpeg",
  },
  {
    name: "North Campus Center",
    address: "45 Knowledge Avenue, North Campus, Delhi, India",
    phone: "+91 91234 56789",
    email: "north@institute.com",
    image: "/images/institutes/institue1.jpeg",
  },
  {
    name: "West End Training Center",
    address: "78 Edu Park Road, West Delhi, India",
    phone: "+91 99887 77665",
    email: "west@institute.com",
    image: "/images/institutes/institue1.jpeg",
  },
];

export default function InstitutesPage() {
  return (
    <section className="bg-slateGray min-h-screen py-16 px-4">
      <div className="container mx-auto lg:max-w-screen-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-midnight_text text-center mb-12">
          Our Institute Centers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutes.map((institute, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-course-shadow hover:shadow-testimonial-shadow2 transition-shadow duration-300"
            >
              <div className="relative w-fit rounded-t-2xl overflow-hidden">
                <img
                  src={institute.image}
                  alt={institute.name}
                  
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {institute.name}
                </h2>
                <p className="text-grey mb-3">{institute.address}</p>
                <div className="text-sm text-midnight_text space-y-1">
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${institute.phone}`}
                      className="text-secondary hover:underline"
                    >
                      {institute.phone}
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${institute.email}`}
                      className="text-secondary hover:underline"
                    >
                      {institute.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
