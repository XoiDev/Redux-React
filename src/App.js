import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./zustand/Counter";

function App() {
  const globalOptions = useSelector((state) => state.global);

  return (
    <div>
      {/* <TodoList></TodoList> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
