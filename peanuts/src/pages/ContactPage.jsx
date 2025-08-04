import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;

    try {
      const res = await fetch(
        "https://peanutswebsite1.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email: formData.email,
            phone: formData.phone,
            subject: "Contact Form Submission",
            message: formData.message,
          }),
        }
      );

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[250px] md:h-[330px] bg-[#fff7ff] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/08/87/00/00/360_F_887000050_D4C73CCfAUeISKvGRtL2znkG7F9tnbI7.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full bg-[#fff7ff] pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-[#fff7ff] p-6 sm:p-10 md:p-16 rounded-lg shadow-xl shadow-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center pb-5 text-gray-800">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-[#510e0b]">*</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-[#510e0b]">*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-[#510e0b]">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact No. <span className="text-[#510e0b]">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                pattern="\d*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comment or Message <span className="text-[#510e0b]">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              ></textarea>
            </div>

            {status && (
              <p className="text-center text-sm text-green-700">{status}</p>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-[#510e0b] text-white py-2 rounded hover:bg-red-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
