import { TRoute } from "../type/type";
import { Paths } from "./path";

import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ReadingListPage from "../pages/ReadingList";
import AddNewsPage from "../pages/AddNews";



export const Routes: TRoute[] = [
  {path: Paths.main, element: <HomePage/>, name: 'Home'},
  {path: Paths.login, element: <LoginPage/>, name: 'Characters'},
  {path: Paths.register, element: <RegisterPage/>, userRole: 'admin', name: 'Form'},
  {path: Paths.addnews, element:  <AddNewsPage/> , name: 'Books'},
  {path: Paths.readinglist, element: <Re/>, userRole: 'admin', name: 'Form'},
]