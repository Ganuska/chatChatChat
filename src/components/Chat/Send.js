import React from "react";

const Send = (props) => {
  return (
    <div className="flex pr-5  justify-end">
      <p className="m-5 border rounded-lg bg-blue-600 border-none p-2">
        {props.text}
      </p>
      <div className="flex flex-col justify-center items-center ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="user"
          className="object-cover w-9 h-9 rounded-full"
        />
        <p className="text-gray-500 text-sm">{props.timestamp}</p>
      </div>
    </div>
  );
};

export default Send;
