import { Badge, Button, PageHeader } from "antd";
import { Auth, getAuth } from "firebase/auth";
import './style.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const Header = () => {
  const dispatch = useAppDispatch();
  
  const auth = getAuth();
  const { isAuth, email, admins } = useAuth();
  const navigate = useNavigate();

  const handlerClickHome = (_e: any) => {
    navigate('/')
  }

  return (
    <PageHeader
      className="site-page-header"
      title={
        <span className="logo" onClick={handlerClickHome}>
          ART
        </span>
      }
      subTitle="news">
      {isAuth &&
        <nav className="navigation">
          <NavLink to='/'>Home</NavLink>
          <Badge count={localStorage.length} size='small'>
            <NavLink to='/readinglist'>Reading list</NavLink>
          </Badge>
          {email && !admins.indexOf(email) && <NavLink to='/addnews'>Add news</NavLink>}
          <Button type="link" className="btn-logout"
            onClick={() => {
              dispatch(removeUser())
              auth.signOut()
            }}
          >Log out from {email}</Button>
        </nav>
      }
    </PageHeader>
  )
}

export default Header