import {useState} from 'react'
function UserWindowPage({addCard}) {
    // eslint-disable-next-line no-undef
    const [isOpened, setIsOpened] = useState(false);
    function togglePopup() {
        setIsOpened((prev) => !prev) 
    }
    // Компонент возвращает JSX , который представляет собой HTML-разметку
    return (<header className="header">
    <div className="container">
        <div className="header__block">
            <div className="header__logo _show _light">
                <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
            </div>
            <div className="header__logo _dark">
                <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
            </div>
            <nav className="header__nav">
                <button onClick={addCard} className="header__btn-main-new _hover01" id="btnMainNew">Создать новую задачу</button>
                <div onClick={togglePopup} className="header__user _hover02">Ivan Ivanov</div>
                {isOpened && (<div className="header__pop-user-set pop-user-set" id="user-set-target">
                    {/* <a href="">x</a> */}
                    <p className="pop-user-set__name">Ivan Ivanov</p>
                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                    <div className="pop-user-set__theme">
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox" />
                    </div>
                    <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                </div>)}
            </nav>					
        </div>
    </div>			
</header>)
}
// Экспорт компонента, чтобы его можно было использовать в других частях приложения
export default  UserWindowPage;