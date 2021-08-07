import React, { useState, useEffect } from "react";
import { Meta } from "./Meta";
import { AppConfig } from "../utils/AppConfig";
import Header from "../components/header";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [isOpen]);
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header isOpen={isOpen} menuToggle={menuToggle} />
      <MobileNav isOpen={isOpen} menuToggle={menuToggle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
