import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./button";
const Header = () => {
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
    <header className="w-full  font-display absolute top-8 z-10">
      <div className="max-w-6xl mx-auto flex justify-between shadow-sm py-3 bg-white rounded-3xl px-8 items-center">
        <div className="flex space-x-2 items-center">
          <img
            className="w-12 h-12"
            src="/assets/images/logo/logo.svg"
            alt=""
          />
          <h4 className="text-xl font-semibold">Waldo Token</h4>
        </div>
        <nav>
          <ul class="flex space-x-6 capitalize">
            {navItem.map((item, i) => (
              <li
                className="cursor-pointer text-sm font-semibold  text-gray-400 hover:text-gray-500"
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
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-sm transition duration-200 text-primary hover:font-semibold"
          >
            Audit
          </a>
          <Button text="wallypaper" url="/wall" />
        </div>
      </div>
    </header>
  );
};

export default Header;
