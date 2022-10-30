import React from "react";

const Input = () => {
  return (
    <div className="flex w-full relative items-center">
      <input
        type="text"
        placeholder="Type something..."
        className=" outline-none w-full border-none p-3  cursor-pointer box-border h-[50px]"
      />
      <button className="absolute right-3 bg-slate-800 p-1 text-white rounded-sm ">
        send
      </button>
    </div>
  );
};

export default Input;
