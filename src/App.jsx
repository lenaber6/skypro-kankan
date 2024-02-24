// Здесь остаётся только маршрутизация - работа со страницами
import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import NotFoundPage404 from "./pages/NotFoundPage404/NotFoundPage404";
import ExitPage from "./pages/ExitPage/ExitPage";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState } from "react";
import "./App.css";
import SigninPage from "./pages/SigninPage/SigninPage";

export default function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }
  function register(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }

  return (
    <Routes>
      {/* Сначала идут приватные маршруты с помощью Outlet, а потом общедоступные */}
      {/* Пропс user вызывает пользователя */}
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />} >
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route  path={appRoutes.EXIT} element={<ExitPage logout={logout}/>} />
          </Route>
      </Route>
      <Route  path={appRoutes.SIGNIN} element={<SigninPage login={login} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage register={register}/>} />
      <Route path={appRoutes.NOT_FOUND_404} element={<NotFoundPage404 />} />
    </Routes>
  );
}
