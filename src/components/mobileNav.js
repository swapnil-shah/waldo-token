import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoClose } from "react-icons/io5";
import Button from "./button";
import { BiMenuAltLeft } from "react-icons/bi";

const MobileNav = ({ isOpen, menuToggle }) => {
  const router = useRouter();
  const navItem = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "wheres-waldo",
      label: "Play Wheres Waldo",
    },
    {
      path: "nft-marketplace",
      label: "NFT Marketplace",
    },
    {
      path: "https://www.google.com/",
      label: "Waldoswap",
    },
  ];
  return (
    <div
      className={
        isOpen
          ? "md:hidden flex flex-col w-screen h-screen z-30 bg-white fixed border-4 border-primary font-semibold"
          : "hidden"
      }
    >
      <div
        className="flex justify-end m-4 text-2xl text-gray-600 cursor-pointer"
        onClick={menuToggle}
      >
        <IoClose />
      </div>
      <nav>
        <ul class="grid grid-rows-4 text-center my-8">
          {navItem.map((item, i) => (
            <li
              className="cursor-pointer text-gray-400 hover:text-gray-500 tracking-wide py-2 my-2"
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
      <div className="mt-4 mx-auto flex flex-col text-center">
        <a
          href="#"
          className="text-sm transition duration-200 text-primary hover:font-semibold py-2 my-2"
        >
          Audit
        </a>
        <Button text="wallypaper" url="/wall" primary />
      </div>
    </div>
  );
};

export default MobileNav;
