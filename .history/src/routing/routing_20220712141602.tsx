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
  {path: Paths.characters, children: ChartersRoutes, name: 'Characters'},
  {path: Paths.books, element: (
      <TestComponent>
          <Books/>
      </TestComponent> 
  ), name: 'Books'},
  {path: Paths.form, element: <FormComponent/>, userRole: 'admin', name: 'Form'},
]