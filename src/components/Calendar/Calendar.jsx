import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { Calendaric, CategoriesP, ChooseDate} from './Calendar.styled';

export default function Calendar({selectedDate, setSelectedDate}) {
 
  let footer = <ChooseDate>Выберите срок исполнения</ChooseDate>;
  if (selectedDate) {
    footer = <p>Вы выбрали {format(selectedDate, "PP", { locale: ru })}</p>;
  }
  return (
    <Calendaric>
      <CategoriesP>Даты</CategoriesP>
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
    </Calendaric>
  );
}