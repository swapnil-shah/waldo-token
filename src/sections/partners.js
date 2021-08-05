import React from "react";

const Partners = () => {
  return (
    <section className="bg-dark py-16">
      <div className="max-6-xl mx-auto flex justify-center">
        <h3 className="subheader text-white">Partners</h3>
      </div>
      <div className="flex flex-wrap justify-around mb-6 space-x-12 lg:space-x-4">
        <img
          src="assets/images/partners/bigcommerce.svg"
          className="w-28 my-4"
          style={{ filter: `invert(0.7)` }}
          alt=""
        />
        <img
          src="assets/images/partners/facebook.svg"
          className="w-28 my-4"
          style={{ filter: `invert(0.7)` }}
          alt=""
        />
        <img
          src="assets/images/partners/google_rating.svg"
          className="w-28 my-4"
          style={{ filter: `invert(0.7)` }}
          alt=""
        />
        <img
          src="assets/images/partners/shopify_plus.svg"
          className="w-28 my-4"
          style={{ filter: `invert(0.7)` }}
          alt=""
        />
        <img
          src="assets/images/partners/shopify_design.svg"
          className="w-28 my-4"
          style={{ filter: `invert(0.7)` }}
          alt=""
        />
      </div>
    </section>
  );
};

export default Partners;
