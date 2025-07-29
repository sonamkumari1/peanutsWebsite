import React from "react";
import Certified from "../components/Certified";

function ProductsPage() {
  return (
    <div className="bg-[#fff7ff]">
      <div
        className="relative h-[330px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/11/65/00/36/360_F_1165003683_rJFtaLZKu080KnPRl4pPnnoSMEwWOt9a.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Products</h1>
        </div>
      </div>

      <div className="pb-30">
        {/* Product Block 1 */}
        <div className="w-full flex flex-col md:flex-row items-start md:px-40 px-4 md:py-24 py-8 gap-10 text-gray-800">
          <div className="w-full md:w-1/2">
            <img
              src="https://t3.ftcdn.net/jpg/14/25/66/04/360_F_1425660470_msJadghrb0Pry2b2kregQi2VruBxIcwI.jpg"
              alt="Ground Nuts With Shell"
              className="w-full h-auto md:w-[550px] md:h-[250px] rounded shadow"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 py-5 bg-[#fff7ff] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold">Ground Nuts With Shell</h3>
             <p className="text-base my-4 ">
            India is the second largest peanut producer in the world. Bold
            variety peanuts has oblong shape with brown skin. Bold peanuts is
            major oil-seed of India, it almost covers 25% of total oil-seed
            production in India. At Dusad Agro Food Pvt. Ltd. <br />we supply BOLD
            variety with available sizes of 40/50, 50/60, 60/70 Counts/Ounce.
          </p>
          </div>
        </div>

        {/* Product Block 2 */}
        <div className="w-full flex flex-col md:flex-row items-start md:px-40 px-4 py-8 gap-10 text-gray-800">
          <div className="w-full md:w-1/2 order-2 md:order-1 px-4 md:px-10 bg-[#fff7ff] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mt-5">Bold Peanuts</h3>
              <p className="text-base mt-4 mb-10">
            India is the second largest peanut producer in the world. Bold
            variety peanuts has oblong shape with brown skin. Bold peanuts is
            major oil-seed of India, it almost cover 25% of total oil-seed
            production in India. At Dusad Agro Food Pvt. Ltd. <br/>we supply BOLD
            variety with available sizes of 40/50, 50/60, 60/70 Counts/Ounce.
          </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="https://t4.ftcdn.net/jpg/12/70/78/01/360_F_1270780181_BG5gS2TDiwsj2yHb8EqLfpBNFVazXfdz.jpg"
              alt="Bold Peanuts"
              className="w-full h-auto md:w-[550px] md:h-[250px] rounded shadow"
            />
          </div>
        </div>

        {/* Product Block 3 */}
        <div className="w-full flex flex-col md:flex-row items-start md:px-40 px-4 md:py-24 py-8 gap-10 text-gray-800">
          <div className="w-full md:w-1/2">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/11/465413376/IM/IH/OL/235406014/bg-1-groundnut-seeds.jpg"
              alt="Java Peanuts"
              className="w-full h-auto md:w-[550px] md:h-[280px] rounded shadow"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 bg-[#fff7ff] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mt-4">Java Peanuts</h3>
            <p className="text-base mt-4 mb-7">
            Java is another popular Indian peanut variety. Java peanuts have
            spheroidal shape with pink skin color. We have JAVA variety peanuts
            with available sizes of 50/60, 60/70, 70/80, 80/90. Bold variety
            peanuts are rich in nutrients, over 30 essential nutrients &
            phytonutrients are discovered in bold peanuts, they are also good
            source of niacin, foliate, fibre, magnesium, vitamin E, manganese &
            phosphorous. They also are naturally free of trans-fats and sodium
            and contain about 25% protein.
          </p>
          </div>
        </div>

        {/* Product Block 4 */}
        <div className="w-full flex flex-col md:flex-row items-start md:px-40 px-4 py-8 gap-10 text-gray-800">
          <div className="w-full md:w-1/2 order-2 md:order-1 px-4 md:px-7 bg-[#fff7ff] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mt-4">Roasted Peanuts Whole</h3>
           <p className="text-base mt-4 mb-9">
            We are engaged in offering the best quality range of Roasted Peanuts
            White Plain (Whole). Our roasted peanuts are very popular among our
            clients for its sumptuous taste and premium quality. The peanuts are
            processed by highly skilled labour under supervision of
            professionals using advanced machines.<br/> Roasted Peanuts White Plain
            (Whole) is available in size of 40/50, 50/60.
          </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="https://ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/1a8f816738ffc617-ivxrbFXo.jpg"
              alt="Roasted Peanuts Whole"
              className="w-full h-auto md:w-[550px] md:h-[270px] rounded shadow"
            />
          </div>
        </div>

        {/* Product Block 5 */}
        <div className="w-full flex flex-col md:flex-row items-start md:px-40 px-4 md:py-24 py-8 gap-10 text-gray-800">
          <div className="w-full md:w-1/2">
            <img
              src="https://royalwholesalecandy.com/cdn/shop/products/2269_1.jpg?v=1682358440"
              alt="Roasted Split White"
              className="w-full h-auto md:w-[550px] md:h-[250px] rounded shadow"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-7 bg-[#fff7ff] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Roasted Split White</h3>
             <p className="text-base">
            At Dusad Agro Food Pvt. Ltd. we are engaged in supplying high
            quality Roasted Split White Peanut. We use ultra-modern processing
            technique to process ground nuts under guidance of adroit
            professionals. Our roasted split white peanuts are delicious in
            taste and that’s why widely applauded in market.<br/> Available sizes of
            Roasted Splits White – 40/50, 50/60 and 60/70.
          </p>
          </div>
        </div>

        {/* Product Block 6 */}
        <div className="w-full flex flex-col md:flex-row items-start md:px-40 px-4 py-8 gap-10 text-gray-800">
          <div className="w-full md:w-1/2 p-4 md:p-7 bg-[#fff7ff] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Roasted White 8 Piece</h3>
            <p className="text-base">
            We are engaged in offering the best quality range of Roasted Peanuts
            White Plain (8 Piece). Our roasted peanuts are very popular among
            our clients for its sumptuous taste and premium quality. The peanuts
            are processed by highly skilled labour under supervision of
            professionals using advanced machines.
          </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://png.pngtree.com/png-clipart/20240903/original/pngtree-dry-roasted-peanut-on-clean-background-png-image_15921955.png"
              alt="Roasted White 8 Piece"
              className="w-full h-auto md:w-[550px] md:h-[220px] rounded shadow"
            />
          </div>
        </div>
      </div>
      <Certified />
    </div>
  );
}

export default ProductsPage;
