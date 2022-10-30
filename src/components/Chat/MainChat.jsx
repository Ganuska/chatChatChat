import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const MainChat = () => {
  return (
    <div className="flex h-full  border-none  flex-col justify-between">
      <nav className="flex w-full  bg-slate-700 min-h-[50px] gap-3 text-gray-400 items-center pl-4 box-border">
        Name
      </nav>
      <div className="bg-slate-400 flex flex-col grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-thumb-rounded-full  scrollbar-track-blue-300  ">
        <Messages />
      </div>
      <Input />
    </div>
  );
};

export default MainChat;