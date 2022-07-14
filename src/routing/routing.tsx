import { TRoute } from "../type/type";
import { Paths } from "./path";

import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ReadingListPage from "../pages/ReadingList";
import AddNewsPage from "../pages/AddNews";
import Article from "../components/news-article";

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

function AppRouting() {

  return useRoutes(Routes)
}
export default AppRouting