import "../../App.css";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { cardList } from "../../data";
import {useState, useEffect} from 'react';
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";



const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage() {
  const [cards, setCards] = useState(cardList);
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
        <Outlet />

        {/* pop-up end*/}

        <Header addCard={addCard} />
        {isLoading ? "Загрузка..." : (<MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)} />
          ))}
         
        </MainContent>)}

      </div>
      // </>
  );
}

export default MainPage;
