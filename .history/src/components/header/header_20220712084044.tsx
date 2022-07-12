import { Button, PageHeader } from "antd";
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
   <></>

  )

    <PageHeader
      className="site-page-header"
      title="ART"
      subTitle="news"
    >     {isAuth ?
      <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Reading list</NavLink>
        <NavLink to='/'>Add news</NavLink>
        <Button type="link"
          onClick={() => dispatch(removeUser())}
        >Log out from {email}</Button>
      </>

 
  }
    </PageHeader>
  );
}

export default Header