import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import * as S from "./EditTaskPage.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function EditTaskPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [newStatus, setNewStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStatus({
      ...newStatus,
      [name]: value,
    });
    
  };

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>
              <S.CategoriesThemeTopOrangeActiveCategory>
                <S.WebDesign>Web Design</S.WebDesign>
              </S.CategoriesThemeTopOrangeActiveCategory>
            </S.PopBrowseTopBlock>

            <S.PopBrowseStatus>
              <S.StatusPSbttl>Статус</S.StatusPSbttl>

              <S.StatusThemes>
                <S.StatusThemesInput
                  type="radio"
                  id="radio1"
                  name="status"
                  value="Без статуса"
                  onChange={handleInputChange}
                />
                <S.StatusThemeHide>
                  <S.StatusThemeP htmlFor="radio1">Без статуса</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemesInput
                  type="radio"
                  id="radio2"
                  name="status"
                  value="Нужно сделать"
                  onChange={handleInputChange}
                />
                <S.StatusThemeHide>
                  <S.StatusThemeP htmlFor="radio2">
                    Нужно сделать
                  </S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemesInput
                  type="radio"
                  id="radio3"
                  name="status"
                  value="В работе"
                  onChange={handleInputChange}
                />
                <S.StatusThemeHide>
                  <S.StatusThemeP htmlFor="radio3">В работе</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemesInput
                  type="radio"
                  id="radio4"
                  name="status"
                  value="Тестирование"
                  onChange={handleInputChange}
                />
                <S.StatusThemeHide>
                  <S.StatusThemeP htmlFor="radio4">Тестирование</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemesInput
                  type="radio"
                  id="radio5"
                  name="status"
                  value="Готово"
                  onChange={handleInputChange}
                />
                <S.StatusThemeHide>
                  <S.StatusThemeP htmlFor="radio5">Готово</S.StatusThemeP>
                </S.StatusThemeHide>
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    // readOnly
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>

            <S.PopBrowseBtnEditHide>
              <S.BtnGroup>
                <S.BtnBrowse>
                  <Link to={"#"}>
                    <S.ButtonSafeClose>
                      <S.BtnBrowseSafeCloseBtnBg>
                        Сохранить
                      </S.BtnBrowseSafeCloseBtnBg>
                    </S.ButtonSafeClose>
                  </Link>

                  <Link to={appRoutes.MAIN}>
                    <S.CancelDeleteButton>
                      <S.BtnBrowseCancelDeleteBtnBor>
                        Отменить
                      </S.BtnBrowseCancelDeleteBtnBor>
                    </S.CancelDeleteButton>
                  </Link>

                  <Link to={"#"}>
                    <S.CancelDeleteButton>
                      <S.BtnBrowseCancelDeleteBtnBor id="btnDelete">
                        Удалить задачу
                      </S.BtnBrowseCancelDeleteBtnBor>
                    </S.CancelDeleteButton>
                  </Link>
                </S.BtnBrowse>

                <Link to={appRoutes.MAIN}>
                  <S.ButtonSafeClose>
                    <S.BtnBrowseSafeCloseBtnBg>
                      Закрыть
                    </S.BtnBrowseSafeCloseBtnBg>
                  </S.ButtonSafeClose>
                </Link>
              </S.BtnGroup>
            </S.PopBrowseBtnEditHide>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
