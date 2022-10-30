import React from "react";

const Search = () => {
  return (
    <div className="p-0 border-b-2 flex flex-col gap-3 border-gray-600">
      <input
        type="text"
        className="outline-none bg-transparent p-4 text-slate-300 "
        placeholder="find a user"
      />
      <div className="flex gap-2 items-center p-4 hover:bg-slate-800 cursor-pointer box-border  ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="user"
          className="w-9 h-9 object-cover rounded-full "
        />
        <span className="text-white font-bold">Zoran S.</span>
      </div>
    </div>
  );
};

export default Search;
