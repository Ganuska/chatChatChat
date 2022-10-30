import React from "react";
import { ImAttachment } from "react-icons/im";
const Input = () => {
  return (
    <div className="flex w-full relative items-center">
      <input
        type="text"
        placeholder="Type something..."
        className=" outline-none w-full border-none p-3  cursor-text box-border h-[50px]"
      />
      <button className="absolute right-3 bg-slate-800 p-1 text-white rounded-md ">
        send
      </button>
      <label htmlFor="InputFile" className="cursor-pointer">
        <div className=" flex justify-center items-center absolute right-16 top-3 ">
          <ImAttachment size={"1.5em"} color={"gray"} />
        </div>
      </label>
      <input type="file" id="InputFile" className="hidden  " />
    </div>
  );
};

export default Input;
