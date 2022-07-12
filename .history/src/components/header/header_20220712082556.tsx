import { PageHeader } from "antd";
import './style.css'
import { useEffect } from "react";
import Link from "antd/lib/typography/Link";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const Header=()=>{
  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();
  return (
    <PageHeader
    className="site-page-header"
    title="ART"
    subTitle="news"
  >
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Reading list</NavLink>
        <NavLink to='/'>Add news</NavLink>
        <button type="link"
            onClick={()=> dispatch(removeUser())}
        >Log out from {email}</button>
  </PageHeader>
  );
}

export default Header