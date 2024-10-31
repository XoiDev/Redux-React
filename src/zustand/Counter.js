import React from "react";
import { counterStore } from "./counter-store";

const Counter = () => {
  const { count, increment, descrement } = counterStore((state) => state);
  return (
    <div>
      <div className=" max-w-[200px]  mx-auto flex items-center justify-center">
        <button
          onClick={increment}
          className="p-4 text-2xl font-semibold text-white bg-green-400"
        >
          +
        </button>
        <span className="px-4 text-2xl font-semibold">{count}</span>
        <button
          onClick={descrement}
          className="p-4 text-2xl font-semibold text-white bg-red-400"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
