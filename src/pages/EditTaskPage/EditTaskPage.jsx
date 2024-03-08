import { useParams } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import {Link} from "react-router-dom";
import * as S from "./EditTaskPage.styled";
import Calendar from "../../components/Calendar/Calendar";
import { useState } from "react";


function EditTaskPage() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  // Компонент возвращает JSX , который представляет собой HTML-разметку
  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи:{id}</S.PopBrowseTtl>
              <S.CategoriesThemeTopOrangeActiveCategory>
                <p className="_orange">Web Design</p>
              </S.CategoriesThemeTopOrangeActiveCategory>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSbttl>Статус</S.StatusPSbttl>
              <S.StatusThemes>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Без статуса</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeGray>
                  <S.StatusThemePGray>Нужно сделать</S.StatusThemePGray>
                </S.StatusThemeGray>
                <S.StatusThemeHide>
                  <S.StatusThemeP>В работе</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Тестирование</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Готово</S.StatusThemeP>
                </S.StatusThemeHide>
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              < S.PopBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01" >
                    Описание задачи
                  </S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>
            <div className="theme-down__categories theme-down">
              <S.CategoriesPSbttl>Категория</S.CategoriesPSbttl>
              <S.CategoriesThemeOrangeActiveCategory>
                <p className="_orange">Web Design</p>
              </S.CategoriesThemeOrangeActiveCategory>
            </div>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowseEditBtnBor>
                  <Link to={"#"}><S.A>Редактировать задачу</S.A></Link>
                </S.BtnBrowseEditBtnBor>
                <S.BtnBrowseDeleteBtnBor>
                <Link to={"#"}><S.A>Удалить задачу</S.A></Link>
                </S.BtnBrowseDeleteBtnBor>
              </S.BtnGroup>
              <S.BtnBrowseCloseBtnBg>
              <Link to={"#"}><S.ABg>Закрыть</S.ABg></Link>
              </S.BtnBrowseCloseBtnBg>
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnEditHide>
              <S.BtnGroup>
                <S.BtnEditEditBtnBg>
                <Link to={"#"}><S.ABg>Сохранить</S.ABg></Link>
                </S.BtnEditEditBtnBg>
                <S.BtnEditEditBtnBor>
                <Link to={"#"}><S.A>Отменить</S.A></Link>
                </S.BtnEditEditBtnBor>
                <S.BtnEditDeleteBtnBor
                  id="btnDelete"
                >
                 <Link to={"#"}><S.A>Удалить задачу</S.A></Link>
                </S.BtnEditDeleteBtnBor>
              </S.BtnGroup>
              <Link to={appRoutes.MAIN}>
                <S.BtnEditCloseBtnBg>
                  Закрыть
                </S.BtnEditCloseBtnBg>
              </Link>
            </S.PopBrowseBtnEditHide>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
// Экспорт компонента, чтобы его можно было использовать в других частях приложения
export default EditTaskPage;
