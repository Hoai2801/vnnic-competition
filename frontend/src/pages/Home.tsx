import React from "react";
import Transition from "../components/common/Transition";

export default function Home() {
  return (
    <Transition>
      <section className="flex flex-col">
        <div className="flex grid-cols-2 grid-rows-2 flex-col gap-2 sm:grid lg:grid-cols-5">
          <div className="col-span-2 row-span-2 lg:col-span-3">
            <h1 className="text-3xl font-bold">Welcome to React</h1>
            <p>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers.
              React can be used as a base in the development of single-page or
              mobile applications.
            </p>
          </div>
          <div>1</div>
          <div>2</div>
          <div className="col-span-2">3</div>
        </div>
      </section>
    </Transition>
  );
}
