import React from "react";
import { UserAuth } from "../../context/authContext";
import { SDrone } from "../../context/scaledroneContext";
const Members = () => {
  const user = UserAuth();
  return (
    <div>
      <div className="flex gap-2 items-center p-4 hover:bg-slate-800 cursor-pointer box-border  ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="user"
          className="w-9 h-9 object-cover rounded-full "
        />
        <span className="text-white font-bold">
          <p>{user.user.displayName}</p>
          <span className=" text-sm text-gray-300">member</span>
        </span>
      </div>
    </div>
  );
};

export default Members;
