import React from "react";

const GallerySection = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-24 lg:py-16 py-8 bg-[#fff7ff]">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-1 flex-col py-4 md:py-0">
              {/* img_01 */}
              <img
                className="object-cover h-full w-full"
                src="https://dusadagro.com/wp-content/uploads/2020/02/pic-10.jpg"
                alt="Gallery 1"
              />
            </div>
            <div className="hidden md:flex flex-1 flex-row gap-2">
              <div className="flex flex-1 flex-col py-4 md:py-0">
                {/* img_02 */}
                <img
                  className="object-cover h-full w-full"
                  src="https://dusadagro.com/wp-content/uploads/2020/02/Groundnut-peanuts.jpg"
                  alt="Gallery 2"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-col py-4 md:py-0">
                {/* img_03 */}
                <img
                  className="object-cover h-full w-full"
                  src="https://dusadagro.com/wp-content/uploads/2020/02/Roasted-Peanut.jpg"
                  alt="Gallery 3"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <div className="hidden md:flex flex-1 flex-row gap-2">
              <div className="flex flex-1 flex-col py-4 md:py-0">
                {/* img_04 */}
                <img
                  className="object-cover h-full w-full"
                  src="https://www.plantrescue.co.nz/images/378739/pid3142564/peanut_plant.jpg"
                  alt="Gallery 4"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-col py-4 md:py-0">
                {/* img_05 */}
                <img
                  className="object-cover h-full w-full"
                  src="https://dusadagro.com/wp-content/uploads/2020/02/Peanuts.jpg"
                  alt="Gallery 5"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col py-4 md:py-0">
              {/* img_06 */}
              <img
                className="object-cover h-full w-full"
                src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_700,q_75,w_1366/v1/clients/virginia/HR20101602P_014_4f3832b9-24f3-4564-ac83-719308b04e85.jpg"
                alt="Gallery 6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
