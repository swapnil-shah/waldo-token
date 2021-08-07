import React from "react";

const Tokenomics = () => {
  const items = [
    {
      title: "$0.40",
      subTitle: "Private Sale",
    },
    {
      title: "$0.55",
      subTitle: "Presale",
    },
    {
      title: "$0.62",
      subTitle: "Launch price on PanCakeSwap",
    },
    {
      title: "211,000",
      subTitle: "Launch Supply",
    },
  ];
  return (
    <section>
      <div className="mt-40 w-11/12 mx-auto">
        <div className="w-full text-center">
          <h3 className="subheader">Tokenmocis</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8">
          <div className="col-span-2 mr-2 hidden md:block">
            <img src="assets/images/waldo_dots.png" alt="" />
          </div>
          <div className="col-span-2 lg:pl-8">
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <ul className="grid grid-cols-4 mt-8">
              {items.map((item, index) => (
                <li key={index} className="p-8 col-span-2">
                  <h6 className="text-primary text-3xl font-bold tracking-widest">
                    {item.title}
                  </h6>
                  <p className="text-gray-500 leading-relaxed ">
                    {item.subTitle}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
