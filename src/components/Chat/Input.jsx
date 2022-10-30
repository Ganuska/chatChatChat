import React from "react";
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
        <img
          htmlFor="InputFile"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="Input file"
          className="w-9 h-9 absolute right-16 top-2 "
        />
      </label>
      <input type="file" id="InputFile" className="hidden  " />
    </div>
  );
};

export default Input;
