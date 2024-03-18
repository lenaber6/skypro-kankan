import * as S from "./RegisterPage.styled.js";
import { WrapperRegisterSignin } from "../../styled/common/common.styled.js";
import { appRoutes } from "../../lib/appRoutes.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registration } from "../../api.js";
import { useUser } from "../../hooks/useUser.js";

export default function RegisterPage() {
  const {login} = useUser()
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };
  const handleRegister = async (e) => {
	e.preventDefault();
	// console.log(registerData);
	await registration(registerData).then((data) => {
		// console.log(data);
		login(data.user);
    navigate(appRoutes.MAIN);
	})
  }
  return (
    <WrapperRegisterSignin>
      <S.ContainerSignUp>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>Регистрация</S.ModalTtl>
            <S.ModalFormLogin id="formLogUp" action="#">
              <S.ModalInput
                value={registerData.name}
                onChange={handleInputChange}
                className="first-name"
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
              ></S.ModalInput>
              <S.ModalInput
                value={registerData.login}
                onChange={handleInputChange}
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              ></S.ModalInput>
              <S.ModalInput
                value={registerData.password}
                onChange={handleInputChange}
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              ></S.ModalInput>
              <S.AButton>
                <Link to={appRoutes.MAIN}>
                  <S.ModalBtnSignupEnt id="SignUpEnter" onClick={handleRegister}>
                    Зарегистрироваться
                  </S.ModalBtnSignupEnt>
                </Link>
              </S.AButton>
              <Link to={appRoutes.SIGNIN}>
                <S.ModalFormGroup>
                  <S.P>
                    Уже есть аккаунт? <S.Span
                    >Войдите здесь</S.Span>
                  </S.P>
                </S.ModalFormGroup>
              </Link>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignUp>
    </WrapperRegisterSignin>
  );
}
