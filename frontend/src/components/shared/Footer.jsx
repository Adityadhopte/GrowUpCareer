import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">GrowUpCareers</h2>
            <p className="mt-2 text-gray-400">
              Your partner in career growth and job opportunities. Explore, connect, and succeed with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-blue-400 transition-colors">Job Listings</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 rounded-full transition-colors"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 rounded-full transition-colors"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 rounded-full transition-colors"
              >
                <img
                  src="/icons/twitter.png"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/soulsoft-innovations/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 rounded-full transition-colors"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 rounded-full transition-colors"
              >
                <img
                  src="/icons/youtube.png"
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>

              
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400">Email: <a href="mailto:info@growupcareers.com" className="hover:text-blue-400">info@growupcareers.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a></p>
            <p className="text-gray-400">Address: 123 Career St, Job City, Country</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} GrowUpCareers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
