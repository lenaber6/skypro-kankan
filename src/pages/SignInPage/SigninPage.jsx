import "../../App.css";
import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { WrapperRegisterSignin } from "../../styled/common/common.styled";
import { useState } from "react";
import { signIn } from "../../api";
import * as S from "./SigninPage.styled";

export default function SigninPage({ login }) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInputChange = (e) => {
    //Ф-ия, чтобы обновлять состояние с новыми введёнными в поля ввода данными
    const { name, value } = e.target; // Извлекаем имя поля и его значение, см. инпут ниже, name = "login", а в value хранится наше значение поля ввода

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData).then((data) => {
      login(data.user);
    });
  };

  return (
    <WrapperRegisterSignin>
      <S.ContainerSignIn>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>Вход</S.ModalTtl>
            <S.ModalFormLogin id="formLogIn" action="#">
              <S.ModalInput
                value={loginData.login}
                onChange={handleInputChange}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              ></S.ModalInput>
              <S.ModalInput
                value={loginData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              ></S.ModalInput>

              <S.ModalBtnEnter 
                id="btnEnter"
                onClick={handleLogin}>
              Войти  
              </S.ModalBtnEnter>

              <S.ModalFormGroup>
            Нужно зарегистрироваться?
                <Link to={appRoutes.REGISTER}><S.ModalFormGroupA>Регистрируйтесь здесь</S.ModalFormGroupA></Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignIn>
    </WrapperRegisterSignin>
  );
}
