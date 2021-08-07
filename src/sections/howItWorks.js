import React from "react";

const HowItWorks = () => {
  const items = [
    {
      icon: "/assets/images/logo/earn.svg",
      title: "Play, and Earn",
      subtitle: "Earn Waldo NFTs by winning!",
    },
    {
      icon: "/assets/images/logo/decentralized.svg",
      title: "Trade NFTs",
      subtitle: "Decentralized NFT Exchange",
    },
    {
      icon: "/assets/images/logo/swap.svg",
      title: "WaldoSwap",
      subtitle: "Stake, Swap, Pool",
    },
  ];
  return (
    <section>
      <div className="mt-40 w-11/12 mx-auto">
        <div className="w-full text-center">
          <h3 className="subheader">How It Works</h3>
        </div>
        <div className="mt-8 grid grid-cols-1  md:grid-cols-3 gap-6 ">
          {items.map((item, i) => (
            <div className="flex justify-center flex-col items-center mt-4 md:mt-0">
              <img src={item.icon} className="w-16 h-16" alt="" />
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              <p className="text-gray-500 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
