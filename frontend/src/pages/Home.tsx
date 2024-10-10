import React from "react";
import Transition from "../components/common/Transition";

export default function Home() {
  return (
    <Transition>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* main post */}
        <div className="flex flex-col gap-4">
          <img
            src="https://images.unsplash.com/photo-1724250267340-4b09ca7e9769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-md object-cover"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus, ea voluptates rerum accusamus facilis necessitatibus
              beatae delectus in sit quibusdam velit.
            </p>
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-gray-500"
                />
                <path
                  d="M12 6V12"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-gray-500"
                />
                <path
                  d="M16.24 16.24L12 12"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-gray-500"
                />
              </svg>
              <p>-</p>
              <p>October 10, 10:32 am</p>
            </div>
          </div>
        </div>
        {/* sub */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 py-4">
            <img
              src="https://images.unsplash.com/photo-1645588904853-0232b8e2dd60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-md object-cover"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, ea voluptates rerum accusamus facilis
                necessitatibus beatae delectus in sit quibusdam velit.
              </p>
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-gray-500"
                  />
                  <path
                    d="M12 6V12"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-gray-500"
                  />
                  <path
                    d="M16.24 16.24L12 12"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-gray-500"
                  />
                </svg>
                <p>-</p>
                <p>October 10, 10:32 am</p>
              </div>
            </div>
          </div>
          {/* end post */}
          <div className="flex flex-col gap-2 py-4">
            <img
              src="https://images.unsplash.com/photo-1653632444999-9996f8830b61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-md object-cover"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, ea voluptates rerum accusamus facilis
                necessitatibus beatae delectus in sit quibusdam velit.
              </p>
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-gray-500"
                  />
                  <path
                    d="M12 6V12"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-gray-500"
                  />
                  <path
                    d="M16.24 16.24L12 12"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-gray-500"
                  />
                </svg>
                <p>-</p>
                <p>October 10, 10:32 am</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}

        <div className="mt-4 flex flex-col gap-4">
          {/* post */}
          <div className="flex items-center justify-between gap-4 border-b border-gray-300 py-4">
            <div>
              <div className="font-serif font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">By</span> &nbsp;{" "}
                <p>Alex</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1541001071045-b8a20d137d3d?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-square h-24 w-24 rounded-md object-cover"
            />
          </div>
          {/* end post */}
          <div className="flex items-center justify-between gap-4 border-b border-gray-300 py-4">
            <div>
              <div className="font-serif font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">By</span> &nbsp;{" "}
                <p>Alex</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1539901241737-c670dd374b03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-square h-24 w-24 rounded-md object-cover"
            />
          </div>{" "}
          <div className="flex items-center justify-between gap-4 border-b border-gray-300 py-4">
            <div>
              <div className="font-serif font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">By</span> &nbsp;{" "}
                <p>Alex</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1538405332804-cdcb125426b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-square h-24 w-24 rounded-md object-cover"
            />
          </div>{" "}
          <div className="flex items-center justify-between gap-4 py-4">
            <div>
              <div className="font-serif font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">By</span> &nbsp;{" "}
                <p>Alex</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1538405234857-a6327c631a82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="aspect-square h-24 w-24 rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </Transition>
  );
}
