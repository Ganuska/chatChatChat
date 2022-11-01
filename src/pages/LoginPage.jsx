import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/Home");
  }, [user, loading]);
  /* controled form */
  const handleChange = (e) => {
    setLogin((old) => {
      const name = e.target.name;
      const value = e.target.value;
      return { ...old, [name]: value };
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-indigo-200">
      <div className=" flex justify-center items-center flex-col bg-indigo-200 sm:bg-white rounded-md border-1 p-6 border-emerald-100 w-full h-full sm:w-[300px] sm:h-[400px] ">
        <h1 className="text-center font-bold">Moj chat App</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-5 justify-center mt-10 items-center"
        >
          <input
            type="email"
            placeholder="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            className=" max-w-full text-center focus:outline-0 border-0 border-b-2 rounded-md"
          />
          <input
            autoComplete="true"
            type="password"
            placeholder="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            className="max-w-full text-center   border-0 border-b-2 focus:outline-0 rounded-md"
          />

          <button
            onClick={() => {
              logInWithEmailAndPassword(login.email, login.password);
            }}
            className=" justify-center rounded-md flex w-1/2 text-center p-2 bg-sky-500 hover:bg-sky-200  "
          >
            Sign In
          </button>
        </form>

        <p className="text-sm mt-2 text-gray-400">
          don`t have an account?
          <b className="hover:text-blue-900 cursor-pointer">
            <Link to={"/RegisterPage"}>Sign Up</Link>{" "}
          </b>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
