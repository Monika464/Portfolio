import React from "react";
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="w-full sm:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-6 mt-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Me
        </h1>
        <div className="space-y-4">
          {/* Email Section */}
          <div className="flex items-center text-gray-700">
            <MdEmail className="text-xl text-blue-500 mr-3" />
            <span className="text-lg font-medium">mkubianka@gmail.com</span>
          </div>

          {/* Phone Section */}
          <div className="flex items-center text-gray-700">
            <GiRotaryPhone className="text-xl text-green-500 mr-3" />
            <span className="text-lg font-medium">+48 123 002 032</span>
          </div>
        </div>

        {/* Zadarma Banner Section */}
        <div className="mt-8 flex items-center justify-center text-gray-600">
          <p className="text-sm mr-2 opacity-70">Join Zadarma:</p>
          <a
            href="https://zadarma.com/en/?ref=61e21d53292342fc4f0c02f68e26dc28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="https://zadarma.com/images/content/invitefriends/banners/v1/zadarma/en/banner02_w1024_h512.svg"
              alt="Join Zadarma"
              className="w-16 h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
