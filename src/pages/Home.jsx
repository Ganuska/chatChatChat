import React from "react";
import MainChat from "../components/Chat/MainChat";
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../context/authContext";
const Home = () => {
  const navigate = useNavigate();
  const user = UserAuth();
  console.log(user.user.displayName);

  useEffect(() => {
    if (!user.user.displayName) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="flex justify-center items-center   bg-indigo-200 h-screen">
      <main className=" lg:rounded-xl w-full box-border shadow-2xl shadow-zinc-800 overflow-hidden lg:w-4/5 lg:h-3/4 h-full flex ">
        <article className="h-full hidden lg:block box-border bg-slate-500  lg:w-1/3">
          <Sidebar />{" "}
        </article>
        <section className="h-full w-full ">
          <MainChat />
        </section>
      </main>
    </div>
  );
};

export default Home;
