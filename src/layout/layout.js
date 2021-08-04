import React from "react";
import { Meta } from "./Meta";
import { AppConfig } from "../utils/AppConfig";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header/>
      <Footer />
    </div>
  );
};

export default Layout;
