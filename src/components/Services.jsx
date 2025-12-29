import React from "react";
import bankLogo from "../images/icon-online.svg";
import budgetLogo from "../images/icon-budgeting.svg";
import onBoardingLogo from "../images/icon-onboarding.svg";
import apiLogo from "../images/icon-api.svg";

function Services() {
  return (
    <div id="about" className="h-screen  relative bg-[#f4f5f7] w-screen">
      <h2 className="text-4xl text-[rgba(0,0,0,0.8)] absolute top-[5rem] left-40 font-tight">
        Why choose Digitalbank?
      </h2>
      <p className="text-[18px] absolute top-[9rem] text-[rgba(0,0,0,0.6)] left-40 w-[39rem]">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <img
        src={bankLogo}
        className="absolute top-[16rem] left-40"
        alt="online"
      />
      <p className="text-2xl absolute left-40 top-[22rem] font-light text-[rgba(0,0,0,0.8)]">
        Online Banking
      </p>
      <p className="w-[15em] absolute left-40 top-[25rem] text-[rgba(0,0,0,0.6)]">
        Our modern web and mobile applications allow you to keep track of your
        finances wherever you are in the world.
      </p>
      <img
        src={budgetLogo}
        className="absolute top-[16rem] left-[26rem]"
        alt="online"
      />
      <p className="text-2xl absolute left-[26rem] top-[22rem] font-light text-[rgba(0,0,0,0.8)]">
        Simple Budgeting
      </p>
      <p className="w-[15em] absolute left-[26rem] top-[25rem] text-[rgba(0,0,0,0.6)]">
        See exactly where your money goes each month. Receive notifications
        where you're close to hitting your limits.
      </p>
      <img
        src={onBoardingLogo}
        className="absolute top-[16rem] left-[42rem]"
        alt="online"
      />
      <p className="text-2xl absolute left-[42rem] top-[22rem] font-light text-[rgba(0,0,0,0.8)]">
        Fast Onboarding
      </p>
      <p className="w-[16.20em] absolute left-[42rem] top-[25rem] text-[rgba(0,0,0,0.6)]">
        We don't do branches. Open your account in minutes online and start
        taking control of your financial right away.
      </p>
      <img
        src={apiLogo}
        className="absolute top-[16rem] left-[60rem]"
        alt="online"
      />
      <p className="text-2xl absolute left-[60rem] top-[22rem] font-light text-[rgba(0,0,0,0.8)]">
        Open API
      </p>
      <p className="w-[17em] absolute left-[60rem] top-[25rem] text-[rgba(0,0,0,0.6)]">
        Manage your saving, investments, pension and much more from one
        account.Tracking your money has never been easier.
      </p>
    </div>
  );
}

export default Services;
