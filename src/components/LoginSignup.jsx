import React, { useRef, useState } from "react";

const LoginSignup = () => {
  const [isSignUp, setIsSignup] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLoginSignupButtonClick = () => {
    if (isSignUp) {
      //Sign Up Api
      console.log({
        email: email.current.value,
        password: password.current.value,
        fullName: name.current.value,
      });
    } else {
      //Log In Api
      console.log({
        email: email.current.value,
        password: password.current.value,
      });
    }
  };

  const loginSignupToggle = () => {
    setIsSignup((prev) => !prev);
  };
  return (
    <div>
      <div className="border border-gray-500 w-[25vw] mx-auto mt-10">
        <div className="my-16 flex justify-center">
          <h1 className="text-3xl font-semibold">Connectify</h1>
        </div>
        <div className="w-[80%] mx-auto mt-16 mb-10">
          <input
            type="text"
            ref={email}
            name="email"
            id="email"
            placeholder="Email"
            className="w-full block border rounded-md border-gray-500 p-[2px] my-2"
          />
          <input
            type="password"
            ref={password}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full block border rounded-md border-gray-500 p-[2px] my-2"
          />
          {isSignUp && (
            <input
              type="text"
              ref={name}
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full block border rounded-md border-gray-500 p-[2px] my-2"
            />
          )}
          <button
            className="w-full p-1 block rounded-lg bg-[#1877F2] mt-8"
            onClick={handleLoginSignupButtonClick}
          >
            Log In
          </button>
        </div>
        <div className="my-6 flex justify-center">
          <p className="cursor-pointer">Forgot Password?</p>
        </div>
      </div>
      <div className=" flex justify-center border border-gray-500 w-[25vw] mx-auto mt-10">
        <p className="my-5">
          Don't have an account?{" "}
          <span
            className="text-[#1877F2] cursor-pointer"
            onClick={loginSignupToggle}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
