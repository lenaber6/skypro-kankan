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
            <Link to={appRoutes.SIGNIN}>
              <S.PopExitYes onClick={logout} id="exitYes">
                Да, выйти
              </S.PopExitYes>
              </Link>
              <Link to={appRoutes.MAIN}>
              <S.PopExitNo id="exitNo">
                Нет, остаться
              </S.PopExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </div>
  );
}
