import { createContext, useState } from "react";

function getTaskFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("task"));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const TaskContext = createContext(null);
export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(getTaskFromLocalStorage());

 
  function putDownTask(newTask) {
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }
  return (
    <TaskContext.Provider value={{ task, putDownTask }}>
      {children}
    </TaskContext.Provider>
  );
};
