import React from "react";
import { useNavigate } from "react-router-dom";

function CardHover() {
  const navigate=useNavigate()

  const cardData = [
    {
      name: "Bold Peanuts",
      image:
        "https://fortuneexicom.com/wp-content/uploads/2020/12/bold-peanuts-500x500-1.jpg",
      description:
        "With over 30 essential nutrients, these peanuts are perfect for a healthy diet.",
    },
    {
      name: "Roasted Peanuts",
      image: "https://bulknuts4you.com/wp-content/uploads/33065-600x600.jpg",
      description: "Very popular for its sumptuous taste & premium quality.",
    },
    {
      name: "GroundNuts in Shell",
      image:
        "https://cdn11.bigcommerce.com/s-vjtvsmbiri/images/stencil/original/carousel/31/Holding_Virginia_in_shell_peanuts.jpg?c=2",
      description:
        "Finest Quality of Ground Nuts in Shell, perfect for snacking.",
    },
  ];

   const handleCardClick = () => {
    navigate("/products");
  };

  return (
    <div className="flex items-center justify-center bg-[#fff7ff] gap-16 pt-28 md:pb-20 flex-wrap">
      {cardData.map((card, index) => (
        <div key={index} className="mt-6 mb-20 md:mt-0 md:mb-0">
          <div onClick={handleCardClick} className="relative h-[270px] w-[300px] cursor-pointer rounded-xl bg-white p-4 shadow-xl transition duration-300 hover:shadow-2xl">
            <div className="absolute -top-10 right-0 z-0 h-48 w-48 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 opacity-50 blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              <img
                src={card.image}
                alt={card.name}
                className="w-48 h-48 object-cover rounded-full border-4 border-white -mt-24"
              />
              <h2 className="mt-4 text-2xl font-semibold text-[#510e0b]">
                {card.name}
              </h2>
              <p className="mt-2 text-base text-center text-[#634618]">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardHover;
