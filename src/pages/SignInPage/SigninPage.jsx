import "../../App.css";
import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { Button } from "../../styled/common/common.styled";
import { useState } from "react";
import { signIn } from "../../api";

export default function SigninPage({login}) {
    const [loginData, setLoginData] = useState({login: "", password: ""})

    const handleInputChange = (e) => {    //Ф-ия, чтобы обновлять состояние с новыми введёнными в поля ввода данными
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
})
}

    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <div className="modal__form-login" id="formLogIn" action="#">
                            <input value= {loginData.login}  onChange= {handleInputChange} className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта"></input>
                            <input value= {loginData.password} onChange= {handleInputChange} className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль"></input> 
                           
                            <span className="modal__btn-enter _hover01" id="btnEnter" onClick={handleLogin}><Button>Войти </Button></span>

                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}