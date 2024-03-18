import { useUser } from "../../hooks/useUser";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "./ExitPage.styled";
import { Link, useNavigate } from "react-router-dom";

export default function ExitPage() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <div className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.SIGNIN);
                }}
                id="exitYes"
              >
                Да, выйти
              </S.PopExitYes>
              <Link to={appRoutes.MAIN}>
                <S.ButtonNo>
                  <S.PopExitNo id="exitNo">Нет, остаться</S.PopExitNo>
                </S.ButtonNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </div>
  );
}
