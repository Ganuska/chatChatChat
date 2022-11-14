import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
const DroneContext = createContext();

export const DroneContextProvider = ({ children }) => {
  const [member, setMember] = useState({
    userName:
      'auth.currentUser.displayName ? auth.currentUser.displayName : ""',
    profile: "s",
  });
  const [drone, setDrone] = useState(
    new window.Scaledrone(process.env.REACT_APP_CHANEL_ID, {
      data: member,
    })
  );
  const [room, setRoom] = useState(drone.subscribe("observable-algebra-chat"));

  useEffect(() => {
    drone.on("start", (error) => {
      console.log(error);
    });
    console.log(drone);
    room.on("open", (error) => {
      if (error) {
        console.log(error);
      }
    });
    console.log(room);
  }, [drone, room]);

  const handleSend = (input) => {
    drone.publish({
      room: "observable-algebra-chat",
      message: input,
    });
  };
  return (
    <DroneContext.Provider value={{ drone, room, handleSend }}>
      {children}
    </DroneContext.Provider>
  );
};

export const SDrone = () => {
  return useContext(DroneContext);
};
