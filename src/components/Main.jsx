import React from "react";
import desktopSvg from "../images/bg-intro-desktop.svg";
import mockUps from "../images/image-mockups.png";

function Main() {
  return (
    <div className="h-screen overflow-hidden  w-screen">
      <h1 className="text-5xl font-light leading-tight  w-[30rem] text-[rgba(0,0,0,0.8)] z-20 absolute left-40 top-[16.50rem]">
        Next generation digital banking
      </h1>
      <p className="leading-relaxed absolute  text-[18px]  w-[30rem] text-[rgba(0,0,0,0.8)] z-20 left-40 top-[26rem]">
        Take your financial life online.Your Digitalbank <br /> account will be
        a one-stop-shop for spending, saving, budgeting, investing, and much
        more.
      </p>
      <img
        className="absolute right-[-12rem]  top-[-10rem] h-[56rem] w-[60rem]"
        src={desktopSvg}
        alt="desktopSvg"
      />
      <img
        src={mockUps}
        className="h-[58rem] absolute top-[-8rem] right-[-6rem] overflow-hidden w-[44rem]"
        alt="mockups"
      />
      <button className="pb-2 pr-7 rounded-full font-medium bg-gradient-to-tr from-[rgba(44,189,189,1)] to-[rgba(49,205,115,1)] absolute left-[10rem] top-[33rem] text-white pt-2 pl-7 border">
        Request Invite
      </button>
    </div>
  );
}

export default Main;
