import React, { useState } from "react";
import { SDrone } from "../../context/scaledroneContext";

const Input = () => {
  const [input, setInput] = useState("");
  const { handleSend } = SDrone();

  const handleSubmit = () => {
    handleSend(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="flex w-full relative items-center">
      <input
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeyDown}
        value={input}
        placeholder="Type something..."
        className=" outline-none w-full border-none p-3  cursor-text box-border h-[50px]"
      />
      <button
        onClick={handleSubmit}
        className="absolute right-3 bg-slate-800 p-1 text-white rounded-md "
      >
        send
      </button>

      <label htmlFor="InputFile" className="cursor-pointer" />
    </div>
  );
};

export default Input;
