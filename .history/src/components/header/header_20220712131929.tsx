import { Badge, Button, PageHeader } from "antd";
import './style.css'
import { useEffect } from "react";
import Link from "antd/lib/typography/Link";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const Header = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();
  return (
    <PageHeader
      className="site-page-header"
      title="ART"
      subTitle="news">
      {isAuth &&
        <nav className="navigation">
          <NavLink to='/'>Home</NavLink>
          
    <Badge count={5} size=><NavLink to='/'>Reading list</NavLink></Badge>
          <NavLink to='/'>Add news</NavLink>
          <Button type="link" className="btn-logout"
            onClick={() => dispatch(removeUser())}
          >Log out from {email}</Button>
        </nav> 
}
    </PageHeader>
  )
}

export default Header