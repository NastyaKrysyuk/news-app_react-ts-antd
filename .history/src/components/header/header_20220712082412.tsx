import { PageHeader } from "antd";
import './style.css'
import { useEffect } from "react";
import Link from "antd/lib/typography/Link";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";

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
        <NavLink to='/'>Log out</NavLink>
  </PageHeader>
  );
}

export default Header