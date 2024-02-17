// Здесь остаётся только маршрутизация - работа со страницами
import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import NotFoundPage404 from "./pages/NotFoundPage404/NotFoundPage404";
import ExitPage from "./pages/ExitPage/ExitPage";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  function logIn() {
    setUser(true);
    navigate(appRoutes.MAIN);
  }
  function logOut() {
    setUser(false);
    navigate(appRoutes.SIGNIN);

  }
  return (
    <Routes>
      {/* Сначала идут приватные маршруты с помощью Outlet, а потом общедоступные */}
      {/* Пропс user вызывает пользователя */}
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route  path={appRoutes.EXIT} element={<ExitPage logout={logOut}/>} />
        </Route>
      </Route>
      <Route  path={appRoutes.SIGNIN} element={<SigninPage login={logIn} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND_404} element={<NotFoundPage404 />} />
    </Routes>
  );
}
