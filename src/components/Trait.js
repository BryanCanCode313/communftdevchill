import React from "react";

function Trait(props) {
  return (
    <div className="flex flex-col w-32 h-32 place-items-center m-4	 bg-gray-100 rounded p-4 md:p-0">
      <img
        alt=""
        className="h-16 w-16 object-cover  bg-contain bg-center md:h-full md:w-16 "
        src={props.trait.img_url}
      />
      <div>{props.trait.name}</div>
    </div>
  );
}

export default Trait;
