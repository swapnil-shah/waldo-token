import React, { useState } from "react";
import Layout from "../layout/layout";
const WheresWaldo = () => {
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
  function handleMouseMove(e) {
    let ofst = (window.innerWidth - 1024) / 2;
    setMousePosition({
      left: Math.round(e.pageX - 60 - ofst) + "px",
      top: Math.round(e.pageY - 60) + "px",
    });
  }

  return (
    <Layout>
      <div
        className="relative"
        onMouseMove={(e) => handleMouseMove(e)}
        style={{ left: MousePosition.left, top: MousePosition.top }}
      >
        <img
          className="absolute top-0 left-0 filter blur-sm saturate-50 z-20"
          src="https://3.bp.blogspot.com/-JlYXI_mJn7U/UFIJ7_8iLJI/AAAAAAAAAWY/ClZoftC59Uc/s1600/TheGobblingGluttons.jpg"
        />
        <div className="glass relative w-32 h-32 block"></div>
      </div>
    </Layout>
  );
};

export default WheresWaldo;
