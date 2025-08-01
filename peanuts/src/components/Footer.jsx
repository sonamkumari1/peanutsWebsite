import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#fff7ff] text-[#634618] text-sm pt-10">
      <div className="px-4 md:px-24 py-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        
          <div className="flex-shrink-0">
            <img
              src="logo.png"
              alt="Dusad Agro Logo"
              className="w-40 h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-start gap-6 md:gap-5 w-full md:w-auto">
            <div className="text-left md:text-left">
              <p className="font-bold text-base">Processing Line:</p>
              <p className="text-base">
               G.M AGRO INDUSTRIES,
                <br />
                Plot No. 122-23, Silver Soil Industrial Park
                <br />
                Govindgarh Chomu -303712 Rajasthan-08
              </p>
            </div>

            <div className="text-left md:text-left md:pl-10">
              <p className="text-base">
                <strong>Mobile:</strong> +91-9413510448,
                <br />
                <strong>Phone:</strong> +91-7297994540,
                <br />
                <strong>Email:</strong>  gmagroindustries2020@gmail.com
                <br />
                <strong>Pan No:</strong>  AAVFG4601J
              </p>
            </div>

            <div className="text-left md:text-left md:pl-10 md:pr-16">
              <strong>GSTIN:</strong>  08AAVFG4601J1Z3
                <br />
              <p className="font-semibold text-base mb-2">Follow us on:</p>
              <div className="flex gap-3 mt-1">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-[#452d08]/20 text-center py-4 text-base">
        © 2018 Dusad Agro Food Pvt Ltd All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
