// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#722f37] text-white p-4 text-sm w-full">
      <div className="max-w-screen-md mx-auto text-center space-y-4">
        <p className="text-xs">&copy; 2024 Church Voting System. All rights reserved.</p>

        <div className="flex justify-center items-center gap-2 text-xs">
          <FaMapMarkerAlt />
          <span>Kotei, Nahinso</span>
        </div>

        <div className="flex justify-center gap-6 text-xs">
          <a
            href="https://www.instagram.com/nutfs_knust"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-pink-400"
          >
            <FaInstagram />
            <span>@nutfs_knust</span>
          </a>
          <a
            href="https://twitter.com/nutfs_knust"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-400"
          >
            <FaTwitter />
            <span>@nutfs_knust</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
