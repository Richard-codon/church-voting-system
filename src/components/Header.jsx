// src/components/Header.jsx
import React from "react";
import logo from "../assets/nutfs_logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#722f37] text-white px-4 py-3 flex items-center gap-3 shadow-md w-full">
      <img src={logo} alt="True Faith Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
      <h1 className="text-base sm:text-lg md:text-xl font-semibold">
        NUTFS-KNUST Voting Application.
      </h1>
    </header>
  );
};

export default Header;
