import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 py-10 mt-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Brand Info */}
          <div className="text-center md:text-left w-full md:w-1/3 pr-10">
            <h2 className="text-2xl font-bold text-white">Jshoppy</h2>
            <p className="mt-2 text-gray-100">
              The best place to find your next favorite product. We offer a wide
              range of products at unbeatable prices. Our mission is to provide
              a seamless shopping experience for our customers.
            </p>
          </div>
          {/* Useful Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="hover:text-white transition duration-300"
            >
              About Us
            </a>
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="hover:text-white transition duration-300"
            >
              Services
            </a>
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11 9.95V14.9h-3v-3h3v-2.2c0-3 1.8-4.6 4.4-4.6 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3H15v7.05A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.4 4.6c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.4 1.9-2.5-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.2-1.4-2.4 0-4.3 2-4.3 4.4 0 .3 0 .7.1 1C7.1 7.8 4.2 6.2 2.2 3.8c-.4.6-.6 1.4-.6 2.2 0 1.5.7 2.8 1.8 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.8 3.4 4.2-.4.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.7 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-.8-.1 1.8 1.2 3.9 1.9 6.2 1.9 7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2.1-2.2z" />
              </svg>
            </a>
            <a
              href="https://portfolio-ayyam.vercel.app/"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.9 3.6 8.9 8.3 9.7V14.9H7.9V12h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.6.6-1.6 1.5V12h3.2l-.5 2.9H13v6.8c4.7-.8 8.3-4.8 8.3-9.7 0-5.4-4.4-9.8-9.8-9.8z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-100 text-sm mt-8">
          © 2024 Jshoppy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
