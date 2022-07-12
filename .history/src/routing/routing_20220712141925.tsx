import { TRoute } from "../type/type";
import { Paths } from "./path";

import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ReadingListPage from "../pages/ReadingList";
import AddNewsPage from "../pages/AddNews";



export const Routes: TRoute[] = [
  {path: Paths.main, element: null, name: 'Home'},
  {path: Paths.login, element: ChartersRoutes, name: 'Characters'},
  {path: Paths.addnews, element:  <Books/> , name: 'Books'},
  {path: Paths.readinglist, element: <FormComponent/>, userRole: 'admin', name: 'Form'},
  {path: Paths.register, element: <FormComponent/>, userRole: 'admin', name: 'Form'},
]