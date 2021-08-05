import React from "react";
import { Meta } from "./Meta";
import { AppConfig } from "../utils/AppConfig";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
