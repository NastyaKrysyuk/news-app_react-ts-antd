import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/use-auth";
import { useState } from "react";
import Navigation from "../navigation";
import { PageHeader } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import './style.css'

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const handlerClickHome = (_e: any) => {
    if(isAuth)  navigate('/');
  }

  const handlerClickMenu = (_e: any) => {
    if(isAuth)  setShow(!show);
  }

  return (
    <>
      {isAuth
        && <Navigation
          className={show ? 'mobile-navigation active' : 'mobile-navigation'}
          handlerClickMenu={handlerClickMenu} />}
      <PageHeader
        className="site-page-header"
        title={
          <>
            <MenuOutlined onClick={handlerClickMenu} />
            <span className="logo" onClick={handlerClickHome}>
              ART
            </span>
          </>
        }
        subTitle="news">
        {isAuth
          && <Navigation className="navigation"/>}
      </PageHeader>
    </>
  )
}

export default Header