import React from "react";
import Nav from "./Nav";
import Members from "./Members";
const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <Nav />
      <Members />
    </div>
  );
};

export default Sidebar;
