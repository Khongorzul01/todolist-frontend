import { createContext, useState, useContext, useEffect } from "react";
import { data, dataServices } from "../data/dataServices";

export const TodoContext = createContext({});

export function useTodo() {
  return useContext(TodoContext);
}

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    dataServices
      .getTodoData()
      .then((res) => res.json())
      .then((data) => {
        setTodo(data.data);
      });
  }, []);

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
