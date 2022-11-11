import { useEffect } from "react";
import { useState } from "react";
import { SDrone } from "../../context/scaledroneContext";
import Recive from "./Recive";
import Send from "./Send";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { room, drone } = SDrone();
  useEffect(() => {
    room?.on("message", (message) => {
      const { data, id, timestamp, clientId, member } = message;
      setMessages((old) => [...old, message]);
      console.log(drone.clientId);
      console.log(clientId);
    });
  }, []);

  return (
    <div className=" ">
      {messages.map((item, index) => {
        if (item.clientId === drone.clientId) {
          return <Send key={index} text={item.data} />;
        } else {
          return <Recive key={index} text={item.data} />;
        }
      })}
    </div>
  );
};

export default Messages;
