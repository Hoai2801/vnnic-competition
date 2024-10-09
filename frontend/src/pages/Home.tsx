import React, { useState } from "react";
import Transition from "../components/common/Transition";
import Modal from "../components/ui/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Transition>
      <section className="flex flex-col py-2">
        <div className="flex grid-cols-2 grid-rows-2 flex-col gap-2 sm:grid lg:grid-cols-8">
          <div className="col-span-4 row-span-2">
            <h1 className="text-3xl font-bold">Welcome to React</h1>
            <p>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers.
              React can be used as a base in the development of single-page or
              mobile applications.
            </p>
          </div>
          <div className="col-span-2">1</div>
          <div className="col-span-2">2</div>
          <div className="col-span-4">3</div>
        </div>
      </section>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
          </div>
        </Modal>
      </div>
    </Transition>
  );
}
