const getTodoData = async () => {
  return await fetch("http://localhost:5001/api/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const dataServices = {
  getTodoData,
};
