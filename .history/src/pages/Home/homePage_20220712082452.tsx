import { Navigate } from "react-router-dom";
import NewsList from "../../components/news-list"
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const HomePage=()=>{
  return isAuth ? (
    <div>
        <NewsList/>
        <button
            onClick={()=> dispatch(removeUser())}
        >Log out from {email}</button>
    </div>
) : (
  <Navigate to="/login" replace />
)
}
export default HomePage