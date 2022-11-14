import React, { useState, useEffect } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { SDrone } from "../../context/scaledroneContext";
const MainChat = () => {
  // const [drone, setDrone] = useState();
  // const [room, setRoom] = useState();
  // useEffect(() => {
  //   const drone = new window.Scaledrone(process.env.REACT_APP_CHANEL_ID);
  //   setDrone(drone);
  //   if (drone) {
  //     drone.on("start", (error) => {
  //       console.log(error);
  //     });
  //   }
  //   if (drone) {
  //     setRoom(drone.subscribe("observable-algebra-chat"));
  //   } else if (room) {
  //     room.on("open", (error) => {
  //       if (error) {
  //         console.log(error);
  //       }
  //     });
  //   }
  // }, []);

  const handleSend = () => {};
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
