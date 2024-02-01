/* eslint-disable no-mixed-spaces-and-tabs */
import "./App.css";
import ExitPage from "./components/ExitPage/ExitPage";
import CreatTaskPage from "./components/CreatTaskPage/CreatTaskPage";
import EditTaskPage from "./components/EditTaskPage/EditTaskPage";
import UserWindowPage from "./components/UserWindowPage/UserWindowPage";
import MainContent from "./components/MainContent/MainContent";
import Column from "./components/Column/Column";

function App() {
  return (
    <div className="wrapper">
      {/* pop-up start*/}
      <ExitPage />
      <CreatTaskPage />
      <EditTaskPage />

      {/* pop-up end*/}

      <UserWindowPage />
      <MainContent>
        <Column title={"Без статуса"} />
        <Column title={"Нужно сделать"} />
        <Column title={"В работе"} />
        <Column title={"Тестирование"} />
        <Column title={"Готово"} />
      </MainContent>
    </div>
  );
}

export default App;
