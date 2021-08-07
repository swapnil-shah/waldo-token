import React from "react";

const Roadmap = () => {
  const items = [
    {
      title: "Phase 1",
      list: [
        "Website & Socials",
        "Contract Audit",
        "PreSale",
        "DEX and CEX Listing",
      ],
    },
    {
      title: "Phase 2",
      list: ["Where's Waldo Game Launch"],
    },
    {
      title: "Phase 3",
      list: ["NFT Marketplace", "WaldoSwap"],
    },
  ];
  return (
    <section>
      <div className="mt-40 w-11/12 mx-auto">
        <div className="flex justify-center">
          <h3 className="subheader">Roadmap</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-2 relative mx-auto">
            <ul className="mt-16">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="roadmap-list border-0 border-dashed border-primary border-l pb-16 pl-8 relative last:border-l-0"
                >
                  <h6 className="text-gray-700 text-3xl font-bold tracking-widest -mt-4 mb-2">
                    {item.title}
                  </h6>
                  {item.list.map((list, i) => (
                    <p key={i} className="text-gray-500 leading-relaxed pb-2">
                      {list}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 mr-2 mx-auto">
            <img
              className="w-1/2"
              src="assets/images/waldo_roadmap.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
