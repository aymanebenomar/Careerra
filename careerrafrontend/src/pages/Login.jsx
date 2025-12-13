import React from "react";
import { motion } from "framer-motion";
import { Mail, User, Lock } from "lucide-react";
import logo from "../assets/darkmodelogo.svg";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice.js";
import toast from "react-hot-toast";
import api from "../configs/api.js";

const Login = () => {

  const dispatch = useDispatch();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");

  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen w-full">

      {/* LEFT SIDE — FULL BLACK */}
      <div className="relative w-1/2 hidden md:flex flex-col bg-black text-white overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[2px] bg-white/10"></div>

        {/* CENTER CONTENT WITH MOTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center h-full z-10"
        >
          <img src={logo} alt="logo" className="w-40 mb-6 opacity-90" />
          <h2 className="text-4xl font-semibold text-white">Join the club</h2>
          <p className="text-white/80 mt-3 text-lg text-center">
            Join to build your path with us.
          </p>
        </motion.div>

        {/* Glow effect */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-[-200px] 
          w-[500px] h-[500px] bg-indigo-600/40 blur-[180px] rounded-full"
        ></div>
      </div>

      {/* RIGHT SIDE — LOGIN / REGISTER FORM */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
            {state === "login" ? "Sign in" : "Sign up"}
          </h3>
          <p className="text-sm text-gray-500/90 mt-3">
            {state === "login"
              ? "Welcome back! Please sign in to continue."
              : "Create your account to get started."}
          </p>

          {/* Google Button — Visual Only */}
          <button
            type="button"
            className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="text-sm text-gray-500/90 whitespace-nowrap">
              or {state === "login" ? "sign in" : "sign up"} with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          {/* NAME FIELD — Only Sign Up */}
          {state === "register" && (
            <div className="flex items-center mt-4 w-full border border-gray-300/70 h-12 rounded-full pl-4 gap-2">
              <User className="text-zinc-500" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-transparent text-gray-600 placeholder-gray-500 outline-none text-sm w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div className="flex items-center mt-4 w-full border border-gray-300/70 h-12 rounded-full pl-4 gap-2">
            <Mail className="text-zinc-500" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent text-gray-600 placeholder-gray-500 outline-none text-sm w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center mt-4 w-full border border-gray-300/70 h-12 rounded-full pl-4 gap-2">
            <Lock className="text-zinc-500" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent text-gray-600 placeholder-gray-500 outline-none text-sm w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Forgot password — only login */}
          {state === "login" && (
            <div className="w-full flex items-center justify-end mt-4">
              <button type="button" className="text-sm text-[#3902FF]">
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white"
            style={{ backgroundColor: "#3902FF" }}
          >
            {state === "login" ? "Login" : "Sign up"}
          </button>

          {/* Switch Mode */}
          <p className="text-gray-500/90 text-sm mt-4">
            {state === "login"
              ? "Don’t have an account?"
              : "Already have an account?"}{" "}
            <span
              onClick={() =>
                setState((prev) => (prev === "login" ? "register" : "login"))
              }
              className="text-[#3902FF] hover:underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
