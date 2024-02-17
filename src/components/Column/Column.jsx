import Card from "../Card/Card";
import * as S from "./Column.styled";

function Column({title, cardList}) {
    // Компонент возвращает JSX , который представляет собой HTML-разметку
    return (
    <S.MainColumn>
    <S.ColumnTitle>
        <p>{title}</p>
    </S.ColumnTitle>
    <S.Cards>
        {cardList.map((card) => <Card 
        theme={card.theme} 
        cardTitle={card.title} 
        date={card.date}
        key={card.id}
        id={card.id}/>)}
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