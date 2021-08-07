import React from "react";
import Social from "./social";
const Footer = () => {
  return (
    <footer>
      <div className="w-full md:w-11/12 mx-auto mt-40 flex justify-center flex-col shadow-sm py-3 bg-secondary md:rounded-3xl px-2  mb-0 md:mb-8 md:px-8 items-center">
        <Social />
        <div class="text-center text-gray-400 text-xs italic light tracking-wide my-2 max-w-3xl">
          Copyright © 2021 Wheres Waldo. All Rights Reserved - Privacy Policy -
          Terms & Conditions. Waldo Token is not an investment and created as a
          meme parody like doge. Waldo Token makes no promises and is not
          responsible for any losses or errors use at your own risk. Waldo Token
          is not affiliated with Where’s Wally book series!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
