import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import * as S from "./WatchTaskPage.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function WatchTaskPage() {
  const [selectedDate, setSelectedDate] = useState(null);

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
                <S.StatusThemeGray>
                  <S.StatusThemePGray>Нужно сделать</S.StatusThemePGray>
                </S.StatusThemeGray>
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    placeholder="Описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>

            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowse>
                  <Link to={appRoutes.EDITTASK}>
                    <S.ButtonDeleteEdit>
                      <S.BtnBrowseEditDeleteBtnBor>
                        Редактировать задачу
                      </S.BtnBrowseEditDeleteBtnBor>
                    </S.ButtonDeleteEdit>
                  </Link>
                  <Link to={"#"}>
                    <S.ButtonDeleteEdit>
                      <S.BtnBrowseEditDeleteBtnBor>
                        Удалить задачу
                      </S.BtnBrowseEditDeleteBtnBor>
                    </S.ButtonDeleteEdit>
                  </Link>
                </S.BtnBrowse>

                <Link to={appRoutes.MAIN}>
                  <S.ButtonClose>
                    <S.BtnBrowseCloseBtnBg>Закрыть</S.BtnBrowseCloseBtnBg>
                  </S.ButtonClose>
                </Link>
              </S.BtnGroup>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
