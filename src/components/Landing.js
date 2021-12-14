import React, { useState } from "react";
import Pointers from "../../public/images/Pointers.png";

function Landing() {
  const [brushSize, setBrushSize] = useState(3);
  const headerStyle = { border: "1px solid" };
  return (
    <div className="border">
      <div className="flex " style={{ border: "1px solid" }}>
        <div>Communifty</div>
        <div>Menu Items</div>
      </div>
      <div className="flex">
        <div className="flex h-full w-1/2 content-center justify-items-center	">
          <div className=""> Create art collections collaboratively </div>
          <div className="flex">
            <button className="btn">Draw</button>{" "}
            <button className="btn">Explore</button>
          </div>
        </div>
        <div className="flex w-1/2 items-center" style={headerStyle}>
          <img
            alt="Pointers"
            className="h-64 border-solid"
            src={Pointers}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Landing;
