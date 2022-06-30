import React, { useState } from "react";
import "../../src/input.css";
import axios from "axios";

import { useTodo } from "../context/todoContext";
import { dataServices } from "../data/dataServices";

export default function Todo() {
  const [todo, setTodo] = useTodo([]);
  const [desc, setDesc] = useState([]);
  const handleList = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    axios
      .post("http://localhost:5001/api/todo", {
        title: e.target[0].value,
        description: "dfc",
        checked_date: "2020-03-20",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const onChangeInput = (e) => {
    setDesc(e.target.value);
    console.log(e.target.value);
  };

  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="rounded shadow p-6 m-4 w-500 lg:w-3/4 lg:max-w-lg ">
          <div className="mb-4 flex items-center bg-purple-400 text-neutral-50 h-20">
            <h1 className="text-grey-darkest font-bold">My ToDo list</h1>
            <p className="bg-purple-600 rounded-xl w-10 text-center">0/6</p>
          </div>
          <div>
            {todo.map((e, index) => {
              return (
                <>
                  <form
                    className="flex mb-4 border-b-2  items-center"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className="space-x-4 space-x-reverse default:ring-2 m-4"
                    />
                    <input
                      type="text"
                      className="w-full text-grey-darkest border-bottom-width: 2px space-x-10"
                      value={e.title}
                      onChange={onChangeInput}
                    />

                    <button className="flex-no-shrink p-2 ml-4 mr-2 rounded hover:text-white text-green border-green hover:bg-green">
                      <img
                        src="1.png"
                        className="border-none"
                        alt="Girl in a jacket"
                        width="30px"
                      />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="flex-no-shrink p-2 ml-2 rounded text-red border-red hover:text-white hover:bg-red"
                    >
                      <img
                        src="2.png"
                        className="border-none"
                        alt="Girl in a jacket"
                        width="30px"
                      />
                    </button>
                  </form>
                </>
              );
            })}
          </div>
          <form action="" onSubmit={handleList}>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none w-full py-2 px-3 mr-4 text-grey-darker border-violet-400 border-b-4"
                placeholder="What's next"
              />
            </div>
            <button
              type="submit"
              className="mt-6 rounded-xl bg-purple-400 w-40 h-10 text-neutral-50 place-items-center text-center"
              placeholder="What's next"
            >
              Add task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
