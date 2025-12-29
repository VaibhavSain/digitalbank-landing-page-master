import React from "react";
import logo from "../images/logo-dark.svg";

function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 pl-44   bg-white w-full pt-4 h-[3.50rem]">
      <img src={logo} className="cursor-pointer transition" alt="logo" />

      <nav className="flex list-none transition  cursor-pointer gap-6 text-gray-500 ml-[20rem] -mt-6 flex-row">
        <li className="hover:text-black hover:opacity-70">Home</li>
        <li className="hover:text-black hover:opacity-70">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-black hover:opacity-70">Contact</li>
        <li className="hover:text-black hover:opacity-70">
          <a href="#blogs">Blog</a>
        </li>
        <li className="hover:text-black hover:opacity-70">Careers</li>
      </nav>
      <button className="pb-2 pr-7 rounded-full font-medium bg-gradient-to-tr from-[rgba(44,189,189,1)] to-[rgba(49,205,115,1)] absolute right-40 top-2 text-white pt-2 pl-7 border">
        Request Invite
      </button>
    </header>
  );
}

export default Header;
