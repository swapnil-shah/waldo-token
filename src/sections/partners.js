import React from "react";

const Partners = () => {
  return (
    <section className="mt-40 bg-dark py-16 w-full md:w-11/12 mx-auto md:rounded-3xl">
      <div className="flex justify-center">
        <h3 className="subheader" style={{ color: "white" }}>
          Partners
        </h3>
      </div>
      <div className="flex flex-wrap justify-around mb-6 space-x-8 lg:space-x-4">
        <img
          src="assets/images/partners/bigcommerce.svg"
          className="w-28 h-28 my-4"
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
