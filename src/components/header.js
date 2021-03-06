import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./button";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = ({ isOpen, menuToggle }) => {
  const router = useRouter();
  const navItem = [
    {
      path: "/",
      label: "Home",
      comingSoon: false,
    },
    {
      path: "wheres-waldo",
      label: "Play Wheres Waldo",
      comingSoon: true,
    },
    {
      path: "nft-marketplace",
      label: "NFT Marketplace",
      comingSoon: true,
    },
    {
      path: "https://www.google.com/",
      label: "Waldoswap",
      comingSoon: false,
    },
  ];

  return (
    <header
      className={isOpen ? "hidden" : "w-full  top-0 md:absolute md:top-8 z-10"}
    >
      <div className="w-full md:w-11/12 mx-auto flex justify-between shadow-sm py-3 bg-white md:rounded-3xl px-2 md:px-8 items-center">
        <div className="block md:hidden" onClick={menuToggle}>
          <BiMenuAltLeft className="text-5xl text-primary" />
        </div>
        <Link href="/">
          <div className="flex md:space-x-2 items-center cursor-pointer">
            <img
              className="w-12 h-12"
              src="/assets/images/logo/logo.svg"
              alt=""
            />
            <h4 className="text-xl font-semibold hidden lg:block text-gray-700">
              Waldo Token
            </h4>
          </div>
        </Link>
        <nav className="hidden lg:block">
          <ul class="space-x-6 capitalize flex">
            {navItem.map((item, i) => (
              <li
                className={
                  item.comingSoon
                    ? "coming-soon cursor-pointer text-sm text-gray-400 hover:text-gray-500 tracking-wide relative"
                    : "cursor-pointer text-sm text-gray-400 hover:text-gray-500 tracking-wide relative"
                }
                key={i}
              >
                <Link href={item.path} activeClassName="text-black">
                  <a
                    className={`cursor-pointer ${
                      router.pathname === item.path && "text-dark font-bold"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center md:space-x-6">
          <a
            href="#"
            className="text-sm transition duration-200 text-primary hover:font-semibold hidden lg:block"
          >
            Audit
          </a>
          <Button text="wallypaper" url="/wall" primary />
        </div>
      </div>
    </header>
  );
};

export default Header;
