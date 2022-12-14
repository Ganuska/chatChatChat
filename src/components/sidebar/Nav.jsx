import React from "react";
import { UserAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const user = UserAuth();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="sm:flex h-[50px] hidden justify-center  bg-slate-600 items-center pl-3 text-white">
      <section className="flex gap-1 pr-3 items-center">
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="avatar"
          className="rounded-full object-cover w-9 h-9"
        />
        <h3>{user.user.displayName}</h3>
        <button
          onClick={handleLogOut}
          className="bg-blue-700 hover:bg-blue-500 p-1 text-sm  rounded-md "
        >
          Logout
        </button>
      </section>
    </div>
  );
};

export default Nav;
