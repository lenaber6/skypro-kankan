import { appRoutes } from "../../lib/appRoutes";
import * as S from "./ExitPage.styled";
import { Link } from "react-router-dom";

export default function ExitPage({logout}) {
  return (
    <div className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes onClick={logout} id="exitYes"><Link to={appRoutes.SIGNIN}>Да, выйти</Link></S.PopExitYes>
              <S.PopExitNo id="exitNo"><Link to={appRoutes.MAIN}>Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </div>
  );
}
