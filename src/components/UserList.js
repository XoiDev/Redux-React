import React, { useEffect, useState } from "react";

const UserList = () => {
  const [list, setList] = useState([]);

  const [values, setValues] = useState("");
  const handleValue = () => {
    setList([...list, values]);
    setValues("");
  };
  const handleDelete = (index) => {
    const del = list.filter((_, i) => i !== index);
    setList(del);
    console.log(del);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
    console.log(storedTodos);
    setList(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex justify-between w-full mt-2">
        <input
          value={values}
          onChange={(e) => {
            setValues(e.target.value);
          }}
          id="job"
          type="text"
          className="w-full text-3xl bg-blue-100 border border-gray-400 text-black-200"
        />
        <button
          onClick={handleValue}
          type="button"
          className="p-4 text-2xl text-white bg-green-400 border rounded-lg"
        >
          addTodoList
        </button>
      </div>
      {list.length > 0 &&
        list.map((item, index) => (
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

export default UserList;
