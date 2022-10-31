import React from "react";
const Nav = (props) => {
  return (
    <div className="sm:flex h-[50px] hidden justify-between bg-slate-600 items-center pl-3 text-white">
      <h1>moj Chat</h1>
      <section className="flex gap-1 pr-3 items-center">
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="avatar"
          className="rounded-full object-cover w-9 h-9"
        />
        <h3>Zoran S.</h3>
        <button className="bg-blue-700 p-1 text-sm rounded-sm ">Logout</button>
      </section>
    </div>
  );
};

export default Nav;
