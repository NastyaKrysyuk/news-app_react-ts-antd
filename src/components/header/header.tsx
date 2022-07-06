import { PageHeader } from "antd";
import './style.css'
import { useEffect } from "react";
import Link from "antd/lib/typography/Link";

const Header=()=>{
  return (
    <PageHeader
    className="site-page-header"
    title="ART"
    subTitle="news"
  >
    <Link>
    </Link>
  </PageHeader>
  );
}

export default Header