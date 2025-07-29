import React from "react";

const AboutHeader = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 dark:bg-gray-800"
      style={{ backgroundImage: "url(https://i0.wp.com/southeastagnet.com/wp-content/uploads/2024/11/Peanut-Field-Depositphotos_489968410_L.jpg?resize=742%2C494&ssl=1)" }}
      data-aos="fade"
    >
      <div className="container mx-auto relative px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.
        </p>

        <nav className="flex justify-center">
          <ol className="flex space-x-2 text-sm">
            <li>
              <a href="index.html" className="text-white hover:underline">
                Home
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-[#ccc]">About</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default AboutHeader;
