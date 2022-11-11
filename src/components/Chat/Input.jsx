import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { UserAuth } from "../../context/authContext";
import { SDrone } from "../../context/scaledroneContext";

const Input = () => {
  const { user } = UserAuth();
  const [input, setInput] = useState("");
  const { handleSend } = SDrone();

  const handleSubmit = () => {
    handleSend(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex w-full relative items-center">
      <input
        type="text"
        onChange={handleChange}
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
