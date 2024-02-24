import * as S from "./RegisterPage.styled.js";
import { WrapperRegisterSignin } from "../../styled/common/common.styled.js";
import { appRoutes } from "../../lib/appRoutes.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registration } from "../../api.js";

export default function RegisterPage({register}) {
  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const handleInputRegisterChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };
  const handleRegister = async (e) => {
	e.preventDefault();
	console.log(registerData);
	await registration(registerData).then((data) => {
		console.log(data);
		register(data.newUser);
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
                onChange={handleInputRegisterChange}
                className="first-name"
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
              ></S.ModalInput>
              <S.ModalInput
                value={registerData.login}
                onChange={handleInputRegisterChange}
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              ></S.ModalInput>
              <S.ModalInput
                value={registerData.password}
                onChange={handleInputRegisterChange}
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
                    Уже есть аккаунт? <S.A>Войдите здесь</S.A>
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
