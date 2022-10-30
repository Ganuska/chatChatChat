import React from "react";
import Nav from "./Nav";
import Rooms from "./Rooms";
import Search from "./Search";
const Sidebar = () => {
  return (
    <div className="flex absolute sm:static  flex-col h-full">
      <Nav />
      <Search />
      <Rooms />
    </div>
  );
};

export default Sidebar;