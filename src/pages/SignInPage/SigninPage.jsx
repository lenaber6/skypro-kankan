import "../../App.css";
import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { Button } from "../../styled/common/common.styled";

export default function SigninPage({login}) {
    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта"></input>
                            <input className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль"></input> 
                            <Link to={appRoutes.MAIN}>
                            <span className="modal__btn-enter _hover01" id="btnEnter" onClick={login}><Button>Войти </Button></span>
                            </Link>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}