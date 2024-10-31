import { stringify } from "postcss";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [values, setValues] = useState("");
  const handleAddTodo = () => {
    console.log(todos);
    setTodos([...todos, values]);
    console.log("work");
    setValues("");
  };
  useEffect(() => {
    const storedLocal = JSON.parse(localStorage.getItem("todosList")) || [];
    console.log(storedLocal);
    setTodos(storedLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (index) => {
    const del = todos.filter((_, i) => i !== index);
    setTodos(del);
  };
  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex justify-between w-full mt-2">
        <input
          value={values}
          onChange={(e) => {
            setValues(e.target.value);
          }}
          type="text"
          className="w-full text-3xl bg-blue-100 border border-gray-400 text-black-200"
        />
        <button
          onClick={handleAddTodo}
          type="button"
          className="p-4 text-2xl text-white bg-green-400 border rounded-lg"
        >
          addTodoList
        </button>
      </div>
      {todos.length > 0 &&
        todos.map((item, index) => (
          <div key={index} className="block border border-solid">
            <ul>
              <li className="flex justify-between p-4 ml-2 text-xl font-semibold">
                <span>{item}</span>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                  className="p-2 text-white bg-red-500 rounded-md"
                >
                  delete
                </button>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
