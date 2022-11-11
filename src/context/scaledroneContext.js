import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

const DroneContext = createContext();

export const DroneContextProvider = ({ children }) => {
  const [drone, setDrone] = useState();
  const [room, setRoom] = useState();
  const [mess, setMess] = useState();
  useEffect(() => {
    const drone = new window.Scaledrone(process.env.REACT_APP_CHANEL_ID);
    setDrone(drone);
    if (drone) {
      drone.on("start", (error) => {
        console.log(error);
      });
    }
    if (drone) {
      setRoom(drone.subscribe("observable-algebra-chat"));
    } else if (room) {
      room.on("open", (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  }, []);
  console.log(room);

  const handleSend = (input) => {
    drone.publish({
      room: "observable-algebra-chat",
      message: input,
    });
    room.on("message", (message) => console.log("Received message:", message));
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
