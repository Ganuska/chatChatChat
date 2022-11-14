import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useUpdateProfile } from "react-firebase-hooks/auth";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = UserAuth();
  const [updateProfile] = useUpdateProfile(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      await updateProfile({ displayName: name });
      navigate("/Home");
    } catch (e) {
      setError(e.message);
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-indigo-200">
      <div className=" flex justify-center items-center flex-col bg-indigo-200 sm:bg-white rounded-md border-1 p-6 border-emerald-100 w-full h-full sm:w-[300px] sm:h-[400px] ">
        <h1 className="text-center font-bold">Moj chat App</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center mt-10 items-center"
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className=" max-w-full focus:outline-0   text-center rounded-md border-b-2 "
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" max-w-full text-center focus:outline-0 border-0 border-b-2 rounded-md"
          />
          <input
            autoComplete="true"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
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
          <button className=" justify-center rounded-md flex w-1/2 text-center p-2 bg-sky-500 hover:bg-sky-200  ">
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
