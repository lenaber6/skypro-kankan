// Здесь остаётся только маршрутизация - работа со страницами
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import NotFoundPage404 from "./pages/NotFoundPage404/NotFoundPage404";
import ExitPage from "./pages/ExitPage/ExitPage";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import SigninPage from "./pages/SigninPage/SigninPage";

export default function App() {
  return (
    <Routes>
      {/* Сначала идут приватные маршруты с помощью Outlet, а потом общедоступные */}
      {/* Пропс user вызывает пользователя */}
      <Route element={<PrivateRoute  />}>
        <Route path={appRoutes.MAIN} element={<MainPage  />} >
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route  path={appRoutes.EXIT} element={<ExitPage />} />
          </Route>
      </Route>
      <Route  path={appRoutes.SIGNIN} element={<SigninPage  />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND_404} element={<NotFoundPage404 />} />
    </Routes>
  );
}
