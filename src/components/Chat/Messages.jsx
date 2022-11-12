import React, { useState, useEffect } from "react";
import Recive from "./Recive";
import Send from "./Send";
import { auth, db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "chat"), orderBy("time"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  });

  return (
    <div className=" ">
      {messages?.map((item) => {
        if (auth.currentUser.uid === item.uid) {
          return <Send text={item.text} />;
        } else {
          return <Recive text={item.text} />;
        }
      })}
    </div>
  );
};

export default Messages;
