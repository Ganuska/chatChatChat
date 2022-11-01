import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase/firebase";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm((old) => {
      const name = e.target.name;
      const value = e.target.value;
      return { ...old, [name]: value };
    });
  };
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!form.name) alert("Please enter name");
    registerWithEmailAndPassword(form.name, form.email, form.password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate({ pathname: "/Home" });
  }, [user, loading]);

  return (
    <div className="h-screen flex justify-center items-center bg-indigo-200">
      <div className=" flex justify-center items-center flex-col bg-indigo-200 sm:bg-white rounded-md border-1 p-6 border-emerald-100 w-full h-full sm:w-[300px] sm:h-[400px] ">
        <h1 className="text-center font-bold">Moj chat App</h1>
        <form className="flex flex-col gap-5 justify-center mt-10 items-center">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            className=" max-w-full focus:outline-0   text-center rounded-md border-b-2 "
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className=" max-w-full text-center focus:outline-0 border-0 border-b-2 rounded-md"
          />
          <input
            autoComplete="true"
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="max-w-full text-center   border-0 border-b-2 focus:outline-0 rounded-md"
          />
          <label
            htmlFor="avatar"
            className="flex w-full justify-center cursor-pointer text-gray-400 text-sm"
          >
            <img src="" alt="avatar" className="rounded-full" />
            choose Avatar
          </label>
          <input type="file" id="avatar" className="hidden" />
          <button
            onClick={register}
            className=" justify-center rounded-md flex w-1/2 text-center p-2 bg-sky-500 hover:bg-sky-200  "
          >
            Sign Up
          </button>
        </form>
        <p className="mt-2 cursor-pointer hover:underline">
          or sign in with Google{" "}
        </p>
        <p className="text-sm mt-2 text-gray-400">
          Alredy have an account?
          <b className="hover:text-blue-900 cursor-pointer">
            <Link to={"/"}> Log In</Link>
          </b>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
