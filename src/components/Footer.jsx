import React from "react";
import logo from ".././images/logo-light.svg";
import facebook from ".././images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
const socialIcons = [facebook, youtube, twitter, pinterest, instagram];

function Footer() {
  return (
    <footer className="bg-[#2d314e] relative h-[10rem] w-screen">
      <img
        className="absolute left-40 top-[2rem] cursor-pointer transition"
        src={logo}
        alt="logo"
      />
      <nav>
        <ul className="flex  flex-row absolute left-40 top-[6.50rem] gap-4">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <img
                src={icon}
                className="hover:opacity-70 transition cursor-pointer"
                alt="socialicon"
              />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col absolute left-[28rem] top-[1.90rem] text-[15px] gap-4 text-gray-300 ">
          <li className="hover:text-white transition cursor-pointer">
            About Us
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>
          <li className="hover:text-white transition cursor-pointer">Blog</li>
        </ul>
        <ul className="flex flex-col absolute left-[40rem] top-[1.90rem] text-[15px] gap-4 text-gray-300">
          <li className="hover:text-white cursor-pointer transition">
            Careers
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Support
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Privacy Policy{" "}
          </li>
        </ul>
      </nav>
      <button className="pb-2 pr-7 rounded-full font-medium bg-gradient-to-tr from-[rgba(44,189,189,1)] to-[rgba(49,205,115,1)] absolute right-40 top-[2rem] text-white pt-2 pl-7 ">
        Request Invite
      </button>
      <p className="opacity-50 text-white text-sm absolute right-40 top-[6rem]">
        &copy;Digitalbank. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
