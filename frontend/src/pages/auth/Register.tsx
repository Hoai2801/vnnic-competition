import React from "react";
import Transition from "../../components/common/Transition";
import BackButton from "../../components/ui/BackButton";
import { useToast } from "../../components/ui/ToastContext";
import Anchor from "./../../components/ui/anchor/Anchor";

const Register = () => {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("Error!", "error");
  };
  return (
    <Transition>
      <div className="dark:bg-dark py-2">
        <div className="mx-5 flex h-screen flex-col items-center justify-center space-y-10 md:mx-0 md:my-0 md:flex-row md:space-x-16 md:space-y-0">
          <div className="max-w-sm md:w-1/3">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
            />
          </div>
          <div className="max-w-sm md:w-1/3">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-blue-600 md:text-3xl">
              Register
            </h2>
            <input
              className="dark:bg-dark w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="dark:bg-dark mt-4 w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="dark:bg-dark mt-4 w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm"
              type="password"
              placeholder="Password"
            />
            <input
              className="dark:bg-dark mt-4 w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="mt-4 flex gap-4 text-center md:text-left">
              <button
                className="rounded bg-blue-600 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-blue-700"
                type="submit"
                onClick={handleClick}
              >
                Register
              </button>
              <BackButton className="bg-indigo-500 text-xs uppercase hover:bg-indigo-600" />
            </div>
            <div className="mt-4 text-center text-sm font-semibold text-slate-500 md:text-left">
              Already have an account?{" "}
              <Anchor
                text="Login"
                href="/login"
                className="text-blue-600 after:bg-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Register;
