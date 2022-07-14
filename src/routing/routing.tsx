import { TRoute } from "../type/type";
import { Paths } from "./path";

import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ReadingListPage from "../pages/ReadingList";
import AddNewsPage from "../pages/AddNews";
import Article from "../pages/Article";
import { useAuth } from "../hook/use-auth";
import { useEffect } from "react";

export const HomeRoutes: TRoute[] = [
  { path: Paths.main, element: <HomePage />, name: 'Home' },
  { path: Paths.newsitem, element: <Article/>, name: 'NewsItem' },
]

export const Routes: TRoute[] = [
  { path: Paths.main, children: HomeRoutes, name: 'Home' },
  { path: Paths.login, element: <LoginPage />, name: 'Login' },
  { path: Paths.register, element: <RegisterPage />, name: 'Register' },
  { path: Paths.readinglist, element: <ReadingListPage />, name: 'ReadingList' },
  { path: Paths.addnews, element: <AddNewsPage />, userRole: 'admin', name: 'AddNews' },
]

function RoutesCore() {
  return useRoutes(Routes)
}
function AppRouting() {
  const navigate = useNavigate()
  const { isAuth } = useAuth();
  let location = useLocation();
  useEffect(() => {
    if (!isAuth) {
      navigate('/login', {state: {from: location}})
    }
  }, [isAuth])
  return <RoutesCore/>
}
export default AppRouting