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
        topic={task.topic} 
        title={task.title} 
        date={task.date}
        key={task._id}
        id={task._id}/>)}
        {/* <Card theme={"Web design"} cardTitle={"Новая задача"}/>
    
        <Card theme={"Research"} cardTitle={"Новая задача"}/>
    
        <Card theme={"Web design"} cardTitle={"Новая задача"}/>
        
        <Card theme={"Research"} cardTitle={"Новая задача"}/>
        
        <Card theme={"Copywriting"} cardTitle={"Новая задача"}/> */}
    </S.Cards>
</S.MainColumn>)
}
// Экспорт компонента, чтобы его можно было использовать в других частях приложения
export default  Column;