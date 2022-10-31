import React from "react";
import MainChat from "../components/Chat/MainChat";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-center items-center  bg-indigo-200 h-screen">
      <main className="rounded-xl w-full box-border overflow-hidden md:w-4/5 md:h-3/4 h-full flex ">
        <article className="h-full hidden   sm:block  box-border bg-slate-500  sm:w-1/3">
          <Sidebar />{" "}
        </article>
        <section className="h-full w-full sm:w-2/3">
          <MainChat />
        </section>
      </main>
    </div>
  );
};

export default Home;
