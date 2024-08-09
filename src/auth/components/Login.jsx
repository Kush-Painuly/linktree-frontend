import React, { useState } from "react";
import linktreeImg from "../../assets/Linktree-Emblem.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleloginhandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    }
    try {
      setIsLoading(true);
      const response = await login({email, password});
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
    {loading && <h1 className="text-center text-2xl text-black">Please Wait...</h1>}
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="w-2/5 flex items-center justify-center p-4">
            <img src={linktreeImg} alt="link-tree-image" className="w-3/5" />
          </div>
          <div className="mt-12 mb-12">
            <h1 className="text-5xl font-bold text-center">Welcome back!</h1>
            <p className="text-gray-500 text-center p-2">
              Log in to your Linktree.
            </p>
          </div>
          <div>
            <form className="text-center" onSubmit={handleloginhandler}>
              <div>
                <input
                  type="text"
                  placeholder="Email or username"
                  className="text-gray-600 bg-gray-200 py-4 px-16 rounded-lg w-8/12"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error &&<p className="text-red-500 text-center">Please fill this field</p>}
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="text-gray-600 bg-gray-200 py-4 px-16 rounded-lg w-8/12"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error &&<p className="text-red-500 text-center">Please fill this field</p>}
              </div>
              <div className="py-4 px-28 text-start">
                <Link className="text-indigo-700">
                  Log in with phone number
                </Link>
              </div>
              <div className="text-center p-4">
                <button className=" w-8/12 border border-purple-700 bg-purple-700 text-white font-medium hover:bg-purple-800 py-4 px-12 rounded-full">
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="text-center">
            <span className="text-blue-800 cursor-pointer underline">
              Forgot Password?
            </span>
            <span className="text-blue-800 cursor-pointer underline relative px-4">
              Forgot username?
              <span className="before:absolute before:top-1/2 before:text-black before:left-0 before:font-bold before:text-2xl before:transform before:-translate-y-1/2 before:content-['•']" />
            </span>
            <p className="uppercase p-4 text-gray-600 text-xl font-medium">
              or
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-8/12 border border-gray-300 bg-transparent cursor-pointer py-4 px-12 rounded-full">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      role="img"
                      aria-hidden="true"
                      aria-labelledby=" "
                    >
                      <path
                        fill="#4285F4"
                        d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51c-.9.6-2.04.95-3.39.95-2.6 0-4.8-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22Z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.06a10 10 0 0 0 0 9l3.34-2.6Z"
                      ></path>
                      <path
                        fill="#EA4335"
                        d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.34 2.6c.8-2.36 3-4.12 5.6-4.12Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-bold text-black">Continue with Google</p>
                </div>
              </div>
              <div className="w-8/12 border border-gray-300 bg-transparent cursor-pointer py-4 px-12 rounded-full">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      role="img"
                      aria-hidden="true"
                      aria-labelledby=" "
                    >
                      <path
                        d="M20.34 7.5c-.13.1-2.38 1.37-2.38 4.2a4.85 4.85 0 0 0 2.95 4.44c-.01.07-.45 1.58-1.51 3.12-.94 1.36-1.92 2.71-3.42 2.71s-1.88-.87-3.6-.87c-1.7 0-2.3.9-3.66.9-1.37 0-2.32-1.25-3.42-2.8A13.48 13.48 0 0 1 3 11.93c0-4.28 2.78-6.54 5.52-6.54 1.45 0 2.66.95 3.58.95.87 0 2.22-1.01 3.88-1.01.62 0 2.88.06 4.36 2.18Zm-5.15-4A4.91 4.91 0 0 0 16.36.45c0-.15-.01-.31-.04-.44a4.92 4.92 0 0 0-3.24 1.67 4.78 4.78 0 0 0-1.21 2.98c0 .17.03.34.04.4.07.01.19.03.3.03 1 0 2.26-.67 2.98-1.57Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-bold text-black">Continue with Apple</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-500 ">
                Don't have an account?{" "}
                <span className="text-blue-600 underline">Sign up</span>
              </p>
            </div>
            <div className="pb-4">
              <p className="text-gray-500 ">
                You can also{" "}
                <span className="text-blue-600 underline">
                  log in with phone number
                </span>
              </p>
            </div>
          </div>
          <div className="text-start p-12">
            <p className="text-smallest text-gray-500">Cookies Preferences</p>
          </div>
        </div>
        <div className="w-1/2 bg-login-banner bg-no-repeat bg-center bg-cover "></div>
      </div>
    </>
  );
};

export default Login;
