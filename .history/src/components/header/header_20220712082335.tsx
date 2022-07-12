import { PageHeader } from "antd";
import './style.css'
import { useEffect } from "react";
import Link from "antd/lib/typography/Link";
import { NavLink } from "react-router-dom";
import { removeUser } from "../../store/slices/authSlices";

const Header=()=>{
  return (
    <PageHeader
    className="site-page-header"
    title="ART"
    subTitle="news"
  >
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Reading list</NavLink>
        <NavLink to='/'>Add news</NavLink>
        <button
            onClick={()=> dispatch(removeUser())}
        >Log out from {email}</button>
  </PageHeader>
  );
}

export default Header

function dispatch(arg0: any): void {
  throw new Error("Function not implemented.");
}
