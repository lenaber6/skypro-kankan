import "../../App.css";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { Wrapper } from "../../styled/common/common.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",                                                                                                                                                                                                                                                                            
];

function MainPage({ user }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      //console.log(todos); // тут приходят tasks 47
      setCards(todos.tasks);
        setIsLoading(false);
    }).catch(() => {
      alert(`Error`);                                                                     
    })
  }, [user]);
 
  function addCard() {
    // Логика добавления карточки
    const newCard = {
      date: "30.10.23",
      id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <Wrapper>
      {/* pop-up start*/}
      <Outlet />

      {/* pop-up end*/}

      <Header addCard={addCard} />
      {isLoading ? (
        "Загрузка..."
      ) : (
        <MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={cards?.filter((card) => card.status === status) || []}
            />
          ))}
        </MainContent>
      )}
    </Wrapper>
    // </>
  );
}

export default MainPage;
