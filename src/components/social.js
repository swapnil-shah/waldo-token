import React from "react";
import { FaTelegram, FaTwitterSquare, FaMedium } from "react-icons/fa";
const Social = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <FaTwitterSquare />,
      url: "",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      url: "",
    },
    {
      name: "Medium",
      icon: <FaMedium />,
      url: "",
    },
  ];
  return (
    <div className="flex py-4 my-4">
      {socials.map((social, i) => (
        <a
          href={social.url}
          target="_blank"
          key={i}
          className="text-3xl pr-4 text-primary social-item cursor-pointer leading-tight"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
