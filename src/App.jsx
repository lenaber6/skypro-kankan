/* eslint-disable no-mixed-spaces-and-tabs */
import "./App.css";
import ExitPage from "./components/ExitPage/ExitPage";
import CreatTaskPage from "./components/CreatTaskPage/CreatTaskPage";
import EditTaskPage from "./components/EditTaskPage/EditTaskPage";
import UserWindowPage from "./components/UserWindowPage/UserWindowPage";
import MainContent from "./components/MainContent/MainContent";
import Column from "./components/Column/Column";
import { cardList } from "./data";
import {useState, useEffect} from 'react';


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
  const [cards, setCards] = useState(cardList);
  // eslint-disable-next-line no-undef
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);
  function addCard() {
    // Логика добавления карточки
    const newCard = {
      id: cards.length +1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    }
    setCards([...cards, newCard]);
  }
  return (
    <div className="wrapper">
      
      {/* pop-up start*/}
      <ExitPage />
      <CreatTaskPage />
      <EditTaskPage />

      {/* pop-up end*/}

      <UserWindowPage addCard={addCard}/>
      {isLoading ? "Загрузка..." : (<MainContent>
        {statusList.map((status) => (
          <Column
            title={status}
            key={status}
            cardList={cards.filter((card) => card.status === status)}
          />
        ))}
        {/*<Column title={"Без статуса"} />
        <Column title={"Нужно сделать"} />
        <Column title={"В работе"} />
        <Column title={"Тестирование"} />
  <Column title={"Готово"} />*/}
      </MainContent>)}
      
    </div>
  );
}

export default App;
