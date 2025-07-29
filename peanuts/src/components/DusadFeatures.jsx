import React from "react";

const features = [
  {
    title: "WE ARE CERTIFIED",
    description:
      "Dusad AgroFood Pvt Ltd is a ISO 22000, APEDA (EU & Non EU), FSSAI, Spices Board certified leading processor of peanuts.",
    image: "https://dusadagro.com/wp-content/uploads/2020/03/Untitled-1.png",
  },
  {
    title: "OUTSTANDING SERVICE",
    description:
      "We have long-term relationship with both our sellers and buyers, and also committed ourselves to providing good service.",
    image: "https://dusadagro.com/wp-content/uploads/2020/03/Untitled2-1.png",
  },
  {
    title: "ROBUST INFRASTRUCTURE",
    description:
      "We are a team of expert professionals with robust infrastructural facility. Our dedicated workforce is using advanced technologies to offer quality Products.",
    image: "https://dusadagro.com/wp-content/uploads/2020/03/icon-1.png",
  },
];

const DusadFeatures = () => {
  return (
    <section className="px-4 md:px-24 bg-[#fff7ff] md:pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center cursor-pointer rounded-xl bg-[#fff7ff] px-4 md:px-10 shadow-lg transition duration-300 hover:shadow-lg">
        <div className="flex justify-center md:mr-20 mb-8 md:mb-0">
          <img
            src="/h1.png"
            alt="Robust Infrastructure"
            className=""
          />
        </div>

        <div className="space-y-10 md:mr-20 pb-8 md:pb-0">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 md:py-0" 
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h4 className="text-xl font-semibold text-[#510e0b]">
                  {item.title}
                </h4>
                <p className="text-[#634618]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DusadFeatures;
