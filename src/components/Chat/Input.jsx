import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { ImAttachment } from "react-icons/im";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const Input = () => {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "chat"), {
      text: input,
      name: displayName,
      uid,
      time: serverTimestamp(),
    });
  };

  console.log(input);

  return (
    <div className="flex w-full relative items-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type something..."
        className=" outline-none w-full border-none p-3  cursor-text box-border h-[50px]"
      />
      <button
        onClick={handleSend}
        className="absolute right-3 bg-slate-800 p-1 text-white rounded-md "
      >
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
