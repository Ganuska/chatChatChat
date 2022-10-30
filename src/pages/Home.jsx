import React from "react";
import MainChat from "../components/Chat/MainChat";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-indigo-200 h-screen">
      <main className="rounded-xl w-full box-border overflow-hidden md:w-4/5 md:h-3/4 h-full flex border-white border">
        <article className="h-full border box-border bg-blue-800  w-1/3">
          <Sidebar />{" "}
        </article>
        <section className="h-full w-2/3">
          <MainChat />
        </section>
      </main>
    </div>
  );
};

export default Home;
