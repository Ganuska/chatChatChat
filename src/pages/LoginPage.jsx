import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";
const LoginPage = () => {
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin((old) => {
      const name = e.target.name;
      const value = e.target.value;
      return { ...old, [name]: value };
    });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await logIn(login.email, login.password);
      navigate("/Home");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-indigo-200">
      <div className=" flex justify-center items-center flex-col bg-indigo-200 sm:bg-white rounded-md border-1 p-6 border-emerald-100 w-full h-full sm:w-[300px] sm:h-[400px] ">
        <h1 className="text-center font-bold">Moj chat App</h1>
        <form
          onSubmit={handleLogIn}
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

          <button className=" justify-center rounded-md flex w-1/2 text-center p-2 bg-sky-500 hover:bg-sky-200  ">
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
