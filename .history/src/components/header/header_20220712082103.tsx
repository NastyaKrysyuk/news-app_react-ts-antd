import { PageHeader } from "antd";
import './style.css'
import { useEffect } from "react";
import Link from "antd/lib/typography/Link";
import { NavLink } from "react-router-dom";

const Header=()=>{
  return (
    <PageHeader
    className="site-page-header"
    title="ART"
    subTitle="news"
  >
        <NavLink to=''>Home</NavLink> <br />
        <NavLink to={Paths.characters}>Characters</NavLink>
  </PageHeader>
  );
}

export default Header