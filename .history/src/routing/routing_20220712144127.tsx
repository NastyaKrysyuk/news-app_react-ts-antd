import { TRoute } from "../type/type";
import { Paths } from "./path";

import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ReadingListPage from "../pages/ReadingList";
import AddNewsPage from "../pages/AddNews";

export const HomeRouts:

export const Routes: TRoute[] = [
  { path: Paths.main, children: HomeRouts, name: 'Home' },
  { path: Paths.login, element: <LoginPage />, name: 'Login' },
  { path: Paths.register, element: <RegisterPage />, name: 'Register' },
  { path: Paths.readinglist, element: <ReadingListPage />, name: 'ReadingList' },
  { path: Paths.addnews, element: <AddNewsPage />, userRole: 'admin', name: 'AddNews' },
]

function AppRouting() {
  // const context = useContext(AppContext)
  console.log(Routes);

  // const routesValidate = () => {
  //     //@ts-ignore
  //     if (context.role === 'user') {
  //         return Routes.filter((el) => el.userRole !== 'admin')
  //     }
  //     return Routes
  // }
  return (
    <>
      {useRoutes(Routes)}
    </>
  )
}
export default AppRouting