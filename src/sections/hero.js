import React from "react";
import Button from "../components/button";
import Social from "../components/social";
const Hero = () => {
  return (
    <section className="bg-secondary w-screen h-screen flex-col md:flex-row">
      <div className="w-full md:w-11/12 mx-auto pt-6 md:pt-64 flex flex-col md:flex-row">
        <div className="z-0">
          <img
            className="w-full object-contain max-w-sm absolute right-0 bg-gradient-to-b via-white from-transparent md:via-transparent to-transparent opacity-40 md:opacity-100"
            src="/assets/images/hero.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-3/5 px-4 lg:px-8 mx-auto absolute bottom-0 md:relative md:m-0 md:pt-0 z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-dark mb-8">
            PLAY EARN SWAP
          </h1>
          <h3 class="mt-3 text-lg md:text-xl text-gray-500 leading-relaxed mb-12">
            $WALDO, WALDOSWAP , Innovative Gaming System, WALDO NFT’s and more
          </h3>
          <div className="flex space-x-4 mt-8">
            <Button text="buy token" url="" primary />
            <Button text="wallypaper" url="" />
          </div>
          <div>
            <Social />
          </div>
        </div>
      </div>
      {/* <div className="h-full flex items-center md:absolute right-0 top-16 sm:mx-auto">
        <img
          className="object-contain max-w-md"
          src="/assets/images/hero.png"
          alt=""
        />
      </div> */}
    </section>
  );
};

export default Hero;
