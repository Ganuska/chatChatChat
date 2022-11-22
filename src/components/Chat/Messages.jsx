import { useEffect } from "react";
import { useState } from "react";
import { SDrone } from "../../context/scaledroneContext";
import Recive from "./Recive";
import Send from "./Send";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { room, drone } = SDrone();

  useEffect(() => {
    room.on("message", (message) => {
      const { data, id, timestamp, clientId, member } = message;
      setMessages((old) => [...old, message]);
    });
  }, [room]);

  return (
    <div className=" ">
      {messages.map((item, index) => {
        if (item.clientId === drone.clientId) {
          return (
            <Send
              key={index}
              text={item.data}
              timestamp={new Date(item.timestamp * 1000).toLocaleTimeString(
                "en-US"
              )}
            />
          );
        } else {
          return (
            <Recive
              key={index}
              text={item.data}
              timestamp={new Date(item.timestamp * 1000).toLocaleTimeString(
                "en-US"
              )}
            />
          );
        }
      })}
    </div>
  );
};

export default Messages;
