

function AboutPage() {
  return (
    <div className="w-full bg-cover bg-[#fff7ff] bg-center bg-no-repeat">
      {/* Banner Section */}
      <div
        className="relative h-[200px] md:h-[330px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/08/54/68/08/360_F_854680844_pei1YvD8BKGrbQObfx6JIIcYTiOSl0Hl.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold">About</h1>
        </div>
      </div>

      <section className="py-10 md:py-20 px-4 md:px-36">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3a3123] mb-4">
              A GLIMPSE OF G.M AGRO INDUSTRIES
            </h2>
            <p className="font-bold text-base text-[#3a3123] mb-4">
              A visionary Indian company with 20 years of excellent
              <br className="hidden md:block" />
              experience of processing and exporting premium quality
              <br className="hidden md:block" />
              peanuts and groundnuts all over the world.
            </p>
            <p className="text-[#3a3123]">
              <span className="font-bold">An ISO 22000 Certified Company</span>
              <br className="hidden md:block" />
              Quality, price and commitment are the three pillars on which
              <br className="hidden md:block" />
              the company has built its goodwill and earned accolades of its
              <br className="hidden md:block" />
              satisfied customers. We export all types of peanuts to all parts
              <br className="hidden md:block" />
              of the world. The company has made a strong foothold in EU & CIS
              countries.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://t4.ftcdn.net/jpg/08/37/74/65/360_F_837746557_JaBX9iGjDybM7W0eDtquLzvnTpr4rHR0.jpg"
              alt="Peanuts"
              className="w-full h-auto md:w-[550px] md:h-[320px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-36">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          <div className="w-full md:w-1/2">
            <img
              src="https://dusadagro.com/wp-content/uploads/2020/02/About-us-2-min.png"
              alt="About us"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://dusadagro.com/wp-content/uploads/2020/09/about-image-1.jpg"
              alt="About"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4">
        <div>
          <img
            src="https://dusadagro.com/wp-content/uploads/2020/09/about-image-2-1024x431.jpg"
            alt="About wide"
            className="w-full h-auto md:h-[500px] rounded-lg shadow"
          />
        </div>
      </section>

     
    </div>
  );
}

export default AboutPage;
