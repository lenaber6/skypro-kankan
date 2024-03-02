import * as S from "./TaskPage.styled";
import {Link} from "react-router-dom";

export default function TaskPage() {
    return (
    <S.PopNewCard id="popNewCard">	
    <S.PopNewCardContainer>
        <S.PopNewCardBlock>
            <S.PopNewCardContent>
                <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                <Link to= {"*"}> <S.PopNewCardClose>&#10006;</S.PopNewCardClose></Link>
                <S.PopNewCardWrap>
                    <S.PopNewCardForm className="form-new" id="formNewCard" action="#">
                        <S.FormNewBlock>
                            <S.Sbttl htmlFor="formTitle" >Название задачи</S.Sbttl>
                            <S.FormNewInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                        </S.FormNewBlock>
                        <S.FormNewBlock>
                            <S.Sbttl htmlFor="textArea">Описание задачи</S.Sbttl>
                            <S.FormNewArea name="text" id="textArea"  placeholder="Введите описание задачи..."></S.FormNewArea>
                        </S.FormNewBlock>
                    </S.PopNewCardForm>
                    <S.Calendar className="pop-new-card__calendar">
                        <S.CalendarTtl>Даты</S.CalendarTtl>									
                        <S.CalendarBlock>
                            <S.CalendarNav>
                                <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
                                <S.NavActions>
                                    <S.NavAction data-action="prev">
                                        <S.NavActionSvg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                            <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                                        </S.NavActionSvg>
                                    </S.NavAction>
                                    <S.NavAction data-action="next">
                                        <S.NavActionSvg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                            <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                                        </S.NavActionSvg>
                                    </S.NavAction>
                                </S.NavActions>
                            </S.CalendarNav>
                            <S.CalendarContent>
                                <S.CalendarDaysNames>
                                    <S.CalendarDayName>пн</S.CalendarDayName>
                                    <S.CalendarDayName>вт</S.CalendarDayName>
                                    <S.CalendarDayName>ср</S.CalendarDayName>
                                    <S.CalendarDayName>чт</S.CalendarDayName>
                                    <S.CalendarDayName>пт</S.CalendarDayName>
                                    <S.CalendarDayName className=" -weekend-">сб</S.CalendarDayName>
                                    <S.CalendarDayName className=" -weekend-">вс</S.CalendarDayName>
                                </S.CalendarDaysNames>
                                <S.CalendarCells>
                                    <S.CalendarCellOtherMonth>28</S.CalendarCellOtherMonth>
                                    <S.CalendarCellOtherMonth>29</S.CalendarCellOtherMonth>
                                    <S.CalendarCellOtherMonth>30</S.CalendarCellOtherMonth>
                                    <S.CalendarCellDay >31</S.CalendarCellDay>
                                    <S.CalendarCellDay>1</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">2</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">3</S.CalendarCellDay>
                                    <S.CalendarCellDay>4</S.CalendarCellDay>
                                    <S.CalendarCellDay>5</S.CalendarCellDay>
                                    <S.CalendarCellDay>6</S.CalendarCellDay>
                                    <S.CalendarCellDay>7</S.CalendarCellDay>
                                    <S.CalendarCellDayCurrent>8</S.CalendarCellDayCurrent>
                                    <S.CalendarCellDay className=" _weekend">9</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">10</S.CalendarCellDay>
                                    <S.CalendarCellDay>11</S.CalendarCellDay>
                                    <S.CalendarCellDay>12</S.CalendarCellDay>
                                    <S.CalendarCellDay>13</S.CalendarCellDay>
                                    <S.CalendarCellDay>14</S.CalendarCellDay>
                                    <S.CalendarCellDay>15</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">16</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">17</S.CalendarCellDay>
                                    <S.CalendarCellDay>18</S.CalendarCellDay>
                                    <S.CalendarCellDay>19</S.CalendarCellDay>
                                    <S.CalendarCellDay>20</S.CalendarCellDay>
                                    <S.CalendarCellDay>21</S.CalendarCellDay>
                                    <S.CalendarCellDay>22</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">23</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">24</S.CalendarCellDay>
                                    <S.CalendarCellDay>25</S.CalendarCellDay>
                                    <S.CalendarCellDay>26</S.CalendarCellDay>
                                    <S.CalendarCellDay>27</S.CalendarCellDay>
                                    <S.CalendarCellDay>28</S.CalendarCellDay>
                                    <S.CalendarCellDay>29</S.CalendarCellDay>
                                    <S.CalendarCellDay className=" _weekend">30</S.CalendarCellDay>
                                    <S.CalendarCellOtherMonth className=" _weekend">1</S.CalendarCellOtherMonth>
                                </S.CalendarCells>
                            </S.CalendarContent>
                            
                            <input type="hidden" id="datepick_value" value="08.09.2023" />
                            <div className="calendar__period">
                                <p className="calendar__p date-end">Выберите срок исполнения <span className="date-control"></span>.</p>
                            </div>
                    </S.CalendarBlock>
                </S.Calendar>
                <div className="pop-new-card__categories categories">
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
                </div>
                <S.FormNewCreatButton id="btnCreate">Создать задачу</S.FormNewCreatButton>
            </S.PopNewCardWrap>
        </S.PopNewCardContent>
    </S.PopNewCardBlock>
</S.PopNewCardContainer>
</S.PopNewCard>
)
}
