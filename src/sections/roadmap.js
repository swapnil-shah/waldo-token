import React from "react";

const Roadmap = () => {
  const items = [];
  return (
    <section>
      <div className="mt-40 grid grid-cols-4 w-11/12 md:11/12 mx-auto">
        <div className="col-span-2 lg:pl-8">
          <h3 className="subheader">Roadmap</h3>
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
        <div className="col-span-2 mr-2n bg-primary">
          <img src="assets/images/waldo_roadmap.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;