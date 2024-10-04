import React from "react";
import { Link } from "react-router-dom";
import Transition from "../../components/common/Transition";
import BackButton from "../../components/ui/BackButton";
import styles from "./Notfound.module.css";

export default function Notfound() {
  return (
    <>
      <Transition>
        <section className="flex h-screen w-full items-center justify-center">
          <div
            className="flex h-full w-full items-center justify-center rounded bg-secondary px-8 py-4 text-primary transition-colors duration-300 md:px-12 md:py-8"
            id="error-page"
          >
            <div
              className={`${styles.content} content max-w-[600px] text-center`}
            >
              <h2
                className={`${styles.header} relative mb-4 max-w-[600px] text-[160px] font-bold leading-[1em] after:absolute after:left-0 after:right-0 after:top-0`}
                data-text="404"
              >
                404
              </h2>
              <h4
                className="mb-5 max-w-[600px] text-[20px] uppercase sm:text-[24px]"
                data-text="There's nothing here..."
              >
                There's nothing here...
              </h4>
              <p className="text-balance text-[1.2em]">
                Sorry, the page you're looking for doesn't exist. If you think
                something is broken, report a problem.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
                <Link to="/">
                  <button className="rounded-md bg-sky-500 px-3 py-2 text-white transition-colors hover:bg-sky-600 active:bg-sky-500">
                    Trang chủ
                  </button>
                </Link>
                <BackButton className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500" />
              </div>
            </div>
          </div>
        </section>
      </Transition>
    </>
  );
}
