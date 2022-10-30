import React from "react";

const Nav = () => {
  return (
    <div className="flex h-[50px] justify-between bg-slate-600 items-center pl-3 text-white">
      <h1>moj Chat</h1>
      <section className="flex gap-1 pr-3 items-center">
        {" "}
        <img src="" alt="avatar" className="rounded-full" />
        <h3>Name</h3>
        <button className="bg-blue-700 p-1 text-sm rounded-sm ">Logout</button>
      </section>
    </div>
  );
};

export default Nav;
