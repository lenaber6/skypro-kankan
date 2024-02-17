import * as S from "./ExitPage.styled";
function ExitPage() {
    // Компонент возвращает JSX , который представляет собой HTML-разметку
    return (
    <div className="pop-exit" id="popExit">
    <S.PopExitContainer>
        <S.PopExitBlock>
            <S.PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
            </S.PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
                <S.PopExitFormGroup>
                    <S.PopExitYes  id="exitYes"><a href="modal/signin.html">Да, выйти</a> </S.PopExitYes>
                    <S.PopExitNo  id="exitNo"><a href="main.html">Нет, остаться</a> </S.PopExitNo>
                </S.PopExitFormGroup>
            </form>
        </S.PopExitBlock>
    </S.PopExitContainer>
</div>)
}
// Экспорт компонента, чтобы его можно было использовать в других частях приложения
export default  ExitPage;