import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import * as S from "./TaskPage.styled";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { appRoutes } from "../../lib/appRoutes";
import { postTodo } from "../../api";

export default function TaskPage() {
  const {login} = useUser()
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log(taskData);
  };
  const handleInputChange = (e) => {
    //Ф-ия, чтобы обновлять состояние с новыми введёнными в поля ввода данными
    const { name, value } = e.target; // Извлекаем имя поля и его значение, см. инпут ниже, name = "login", а в value хранится наше значение поля ввода

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleTask = async (e) => {
    e.preventDefault();
    await postTodo(newTask).then((data) => {
      console.log(data);
      login(data.user);
    navigate(appRoutes.MAIN);
    });
  };
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={"*"}>
              {" "}
              <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm
                className="form-new"
                id="formNewCard"
                action="#"
              >
                <S.FormNewBlock>
                  <S.Sbttl htmlFor="formTitle">Название задачи</S.Sbttl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Sbttl htmlFor="textArea">Описание задачи</S.Sbttl>
                  <S.FormNewArea
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
              <div className="prod_checbox">
                <div className="radio-toolbar">
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio1">Web Design</label>

                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio2">Research</label>

                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radio3">Copywriting</label>
                </div>
              </div>
              {/* <div className="pop-new-card__categories categories">
                    <p className="categories__p subttl">Категория</p>
                    <div className="categories__themes">
                        <div className="categories__theme _orange _active-category">
                            <p className="_orange">Web Design</p>
                        </div>
                        <div className="categories__theme _green">
                            <p className="_green">Research</p>
                        </div>
                        <div className="categories__theme _purple">
                            <p className="_purple">Copywriting</p>
                        </div>
                    </div>
                </div> */}
              <S.FormNewCreatButton onClick={handleFormSubmit} id="btnCreate">
                Создать задачу
              </S.FormNewCreatButton>
            </S.PopNewCardWrap>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}
