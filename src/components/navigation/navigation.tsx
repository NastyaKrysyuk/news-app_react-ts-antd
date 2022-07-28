import { CloseCircleFilled } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { getAuth } from "firebase/auth";
import { FC, SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/redux-hook";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

type TProps = {
  className: string;
  handlerClickMenu?: (e: SyntheticEvent) => void
}
const Navigation: FC<TProps> = ({ className, handlerClickMenu }) => {
  const { count } = useAppSelector(state => state.newsList);
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const { email, admins } = useAuth();

  return (
    <nav className={className}>
      <NavLink to='/' onClick={handlerClickMenu}>Home</NavLink>
      <Badge count={count} size='small'>
        <NavLink to='/readinglist' onClick={handlerClickMenu}>Reading list</NavLink>
      </Badge>
      {email
        && admins.some((el: string) => el == email)
        && <NavLink to='/addnews' onClick={handlerClickMenu} >+ Add news</NavLink>}
      <Button type="link" className="btn-logout"
        onClick={() => {
          dispatch(removeUser())
          auth.signOut()
        }}
      >Log out from {email}</Button>
      {handlerClickMenu
        && <div><CloseCircleFilled onClick={handlerClickMenu} /></div>}
    </nav>
  )
}

export default Navigation