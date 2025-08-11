import { getImagePrefix } from "@/utils/util";
import Image from "next/image";

const Newsletter = () => {
  const institutes = [
    { name: "Institute 1", img: "images/banner/Instutue.jpeg" },
    { name: "Institute 2", img: "images/banner/Instutue.jpeg" },
    { name: "Institute 3", img: "images/banner/Instutue.jpeg" },
  ];

  return (
    <div>
      {/* Heading */}
      <div className="text-center text-midnight_text text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8">
        OUR INSTITUTES
      </div>

      {/* Images + Captions */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 sm:py-16 gap-6 sm:gap-12">
        {institutes.map((institute, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <Image
              src={`${getImagePrefix()}${institute.img}`}
              alt={institute.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <p className="mt-4 text-lg font-medium">{institute.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
