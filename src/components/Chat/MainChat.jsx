import React, { useState, useEffect } from "react";
import Input from "./Input";
import Messages from "./Messages";
<<<<<<< Updated upstream
const MainChat = (props) => {
=======
import { UserAuth } from "../../context/authContext";
import { SDrone } from "../../context/scaledroneContext";
const MainChat = () => {
  const { user } = UserAuth();
  const handleSend = () => {};
>>>>>>> Stashed changes
  return (
    <div className="flex h-full  border-none  flex-col justify-between">
      <nav className="flex w-full justify-between  bg-slate-700 min-h-[50px] gap-3 text-gray-400 items-center pl-4 box-border">
        <h1>Name</h1>
      </nav>
      <div className="bg-slate-400 flex flex-col grow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-thumb-rounded-full  scrollbar-track-blue-300  ">
        <Messages messages={""} user={""} />
      </div>
      <Input send={handleSend} />
    </div>
  );
};

export default MainChat;
