import React from "react";
import Anchor from "../../components/anchor/Anchor";
import Transition from "../../components/common/Transition";
import { useToast } from "../../components/toast/ToastContext";
import BackButton from "../../components/ui/BackButton";

const Login = () => {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("Error!", "error");
  };

  return (
    <Transition>
      <div className="py-2 dark:bg-dark">
        <div className="mx-5 flex h-screen flex-col items-center justify-center space-y-10 md:mx-0 md:my-0 md:flex-row md:space-x-16 md:space-y-0">
          <div className="max-w-sm md:w-1/3">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
            />
          </div>
          <form className="max-w-sm md:w-1/3">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-blue-600 md:text-3xl">
              Login
            </h2>
            <div className="flex text-center md:text-left">
              <label className="mr-1 flex items-center dark:text-white">
                Login with
              </label>
              <button
                type="button"
                className="mx-1 h-9 w-9 rounded-full bg-blue-600 text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button
                type="button"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.35 11.1h-9.36v2.8h5.44c-.24 1.24-.96 2.28-1.92 2.96v2.44h3.12c1.8-1.64 2.84-4.08 2.84-6.8 0-.64-.08-1.28-.12-1.88z"
                    fill="#FFF"
                  />
                  <path
                    d="M12 21.6c2.4 0 4.4-.8 5.92-2.16l-3.12-2.44c-.8.52-1.8.84-2.8.84-2.16 0-4-1.44-4.64-3.36H4.12v2.56c1.52 2.96 4.56 5.04 7.88 5.04z"
                    fill="#FFF"
                  />
                  <path
                    d="M7.36 14.48c-.24-.72-.36-1.48-.36-2.24s.12-1.52.36-2.24V7.44H4.12c-.72 1.44-1.12 3.04-1.12 4.8s.4 3.36 1.12 4.8l3.24-2.56z"
                    fill="#FFF"
                  />
                  <path
                    d="M12 6.4c1.04 0 2 .36 2.76 1.04l2.08-2.08C15.92 4.16 14 3.2 12 3.2c-3.32 0-6.36 2.08-7.88 5.04l3.24 2.56c.64-1.92 2.48-3.36 4.64-3.36z"
                    fill="#FFF"
                  />
                </svg>
              </button>
            </div>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                Or
              </p>
            </div>
            <input
              className="w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm dark:bg-dark"
              type="text"
              placeholder="Email Address"
              required
            />
            <input
              className="mt-4 w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm dark:bg-dark"
              type="password"
              placeholder="Password"
              required
            />
            <div className="mt-4 flex justify-between text-sm font-semibold">
              <label className="flex cursor-pointer text-slate-500 hover:text-slate-600">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <Anchor
                text="Forgot Password?"
                href="#"
                className="text-blue-600 after:bg-blue-600"
              />
            </div>
            <div className="mt-4 flex gap-4 text-center md:text-left">
              <button
                className="rounded bg-blue-600 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-blue-700"
                type="submit"
                onClick={handleClick}
              >
                Login
              </button>
              <BackButton className="bg-indigo-500 text-xs uppercase hover:bg-indigo-600" />
            </div>
            <div className="mt-4 text-center text-sm font-semibold text-slate-500 md:text-left">
              Don&apos;t have an account?{" "}
              <Anchor
                text="Register"
                href="/register"
                className="text-red-600 after:bg-red-600"
              />
            </div>
          </form>
        </div>
      </div>
    </Transition>
  );
};

export default Login;
