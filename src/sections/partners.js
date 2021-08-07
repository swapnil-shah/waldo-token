import React from "react";

const Partners = () => {
  return (
    <section className="mt-40 bg-dark py-8 w-full mx-auto bg-gradient-to-b from-gray-700 to-dark">
      <div className="flex justify-center">
        <h3 className="subheader" style={{ color: "white" }}>
          Partners
        </h3>
      </div>
      <div className="flex flex-wrap justify-around mb-6 mx-8 lg:space-x-4">
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
      </div>
    </section>
  );
};

export default Partners;
