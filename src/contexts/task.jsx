import { createContext, useState } from "react";

function getTaskFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("task"));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [task, setTask] = useState(getTaskFromLocalStorage());

  function setTask() {
    setUser(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }
  return (
    <UserContext.Provider value={{ user, login, logout, task }}>
      {children}
    </UserContext.Provider>
  );
};
