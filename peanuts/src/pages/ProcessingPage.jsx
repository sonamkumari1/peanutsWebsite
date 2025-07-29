import React from "react";
import Certified from "../components/Certified";

const ProcessingPage = () => {
  return (
    <div className="bg-[#fff7ff]">
     
      <div
        className="relative h-[330px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://dusadagro.com/wp-content/uploads/2020/03/pic-10.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Processing</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:pt-20">
     
        <section className="text-center my-10 max-w-4xl mx-auto">
          <p className="font-bold text-base text-[#634618] mb-4">
            We are an ISO 22000:2018, APEDA, FSSAI Certified Company with a
            strong foothold in EU & CIS countries.
          </p>
          <p className="font-bold text-base text-[#634618]">
            Our Corporate ethos is the effective utilization of people, process
            and technology, thereby creating a synergy
            <br />
            with the ultimate objective of ensuring highly efficient and
            cost-effective Logistics services to our esteemed clients.
          </p>
        </section>

        <section className="md:my-12">
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/08/processing-0.png"
            alt="Processing Step 0"
            className="w-full my-8  sm:px-76 md:px-96 md:my-16 px-4"
          />
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/08/Processing-1.png"
            alt="Processing Step 1"
            className="w-full my-9 sm:px-48 md:px-64 md:my-16 px-4"
          />
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/08/Processing-2.png"
            alt="Processing Step 2"
            className="w-full my-9 sm:px-48 md:px-64 md:my-16 px-4"
          />
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/09/Images-processing-1-1024x360.jpg"
            alt="Processing Image 1"
            className="w-full"
          />
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/09/Images-processing-2-1024x360.jpg"
            alt="Processing Image 2"
            className="w-full"
          />
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/09/Images-processing-3-1024x360.jpg"
            alt="Processing Image 3"
            className="w-full"
          />
        </section>

        <section className="text-center">
          <Certified />
        </section>
      </div>
    </div>
  );
};

export default ProcessingPage;
