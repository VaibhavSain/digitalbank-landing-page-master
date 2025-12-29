import React from "react";
import currency from "../images/image-currency.jpg";
import plane from "../images/image-plane.jpg";
import restaurant from "../images/image-restaurant.jpg";
import confetti from "../images/image-confetti.jpg";

function Articles() {
  return (
    <div id="blogs" className="h-screen relative w-screen bg-[#fafafa]">
      <h2 className="text-4xl text-[rgab(0,0,0,0.8)] absolute top-[5rem] left-40 ">
        Latest Articles
      </h2>
      <div className=" rounded-md bg-white border-red-300 absolute top-[10rem] left-40 h-[24rem] w-[15rem]">
        <img
          className="rounded-tr-md h-[11.10rem] rounded-tl-md"
          src={currency}
          alt="currency"
        />
        <p className="text-sm ml-5 mt-4 text-gray-500">By Claire Robinson</p>
        <p className="text-[15px] font-light ml-5 mt-2 w-[10rem]">
          Receive money in any currency with no fees
        </p>
        <p className="text-sm ml-4 mt-2 text-gray-500">
          The world is getting smaller and we're becoming more mobile. So why
          should you be forced to only receive money in a single...
        </p>
      </div>
      <div className="rounded-md bg-white border-red-300 absolute top-[10rem] left-[26rem] h-[24rem] w-[15rem]">
        <img
          className="rounded-tr-md h-[11.10rem] rounded-tl-md"
          src={restaurant}
          alt="restaurant"
        />
        <p className="text-sm ml-5 mt-4 text-gray-500">By Wilson Hutton</p>
        <p className="text-[15px] ml-5 font-light mt-2 w-[10rem]">
          Treat yourself without worrying about money
        </p>
        <p className="text-sm ml-4 mt-2 text-gray-500">
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you …
        </p>
      </div>
      <div className=" rounded-md bg-white border-red-300 absolute top-[10rem] left-[42rem] h-[24rem] w-[15rem]">
        <img
          className="rounded-tr-md h-[11.10rem] rounded-tl-md"
          src={plane}
          alt="plane"
        />
        <p className="text-sm ml-5 mt-4 text-gray-500">By Wilson Hutton</p>
        <p className="text-[15px] ml-5 font-light mt-2 w-[10rem]">
          Take your Digitalbank card wherever your go
        </p>
        <p className="text-sm ml-4 mt-2 text-gray-500">
          We want you to enjoy your travels. This is why we don’t charge any
          fees on purchases while you’re abroad. We’ll even show you …
        </p>
      </div>
      <div className="rounded-md bg-white border-red-300 absolute top-[10rem] left-[58rem] h-[24rem] w-[15rem]">
        <img
          className="rounded-tr-md h-[11.10rem] rounded-tl-md"
          src={confetti}
          alt="confetti"
        />
        <p className="text-sm ml-5 mt-4 text-gray-500">By Wilson Hutton</p>
        <p className="text-[15px] ml-5 font-light mt-2 w-[10rem]">
          Our invite-only bet a accounts are now live!
        </p>
        <p className="text-sm ml-4 mt-2 text-gray-500">
          After a lot of hard work by the whole team, we’re excited to launch
          our closed beta. It’s easy to request an invite through ...
        </p>
      </div>
    </div>
  );
}

export default Articles;
