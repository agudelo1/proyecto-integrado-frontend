import Image from "next/image";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8 text-center ">
        <div className="bg-white  shadow-2xl w-full sm:max-w-4xl flex flex-col sm:flex-row rounded-2xl">
          <div className="w-full sm:w-3/5 p-5">
            <div className="text-left font-bold text-2xl">
              <span className="text-green-500">Deli</span>Dash
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2 ">
                <span className="border-[4px] border-green-500 rounded-full p-3 mx-1 mb-3">
                  <FaRegUser className="text-[50px]" />
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-1">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-full sm:w-64 mb-5">
                  <a href="#" className="text-xs text-gray-400">
                    Forgot Password?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/5 bg-green-500 text-white   py-12 px-4 sm:py-36 sm:px-12">
            <h2 className="text-3xl font-bold mb-2 ">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-5 sm:mb-10">
              Fill up personal information and start journey with us.
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
