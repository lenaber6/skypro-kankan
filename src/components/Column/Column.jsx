import Card from "../Card/Card";
import * as S from "./Column.styled";

function Column({title, cardList}) {

    return (
    <S.MainColumn>
    <S.ColumnTitle>
        <p>{title}</p>
    </S.ColumnTitle>
    <S.Cards>
        {cardList.map((task) => 
        <Card 
        date={task.date}
        topic={task.topic} 
        title={task.title} 
        key={task._id}
        id={task._id}/>)}
    </S.Cards>
</S.MainColumn>)
}
export default  Column;