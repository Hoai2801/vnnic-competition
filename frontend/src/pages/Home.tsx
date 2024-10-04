import React from "react";
import Transition from "../components/common/Transition";
import { useToast } from "../components/ui/ToastContext";

export default function Home() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("This is a toast message!", "info");
  };
  return (
    <Transition>
      <section className="px-2 xl:px-0">
        <div>home</div>
      </section>
      <div>
        <button onClick={handleClick}>Show Toast</button>
      </div>
    </Transition>
  );
}
