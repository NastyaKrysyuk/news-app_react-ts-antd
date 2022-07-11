import NewsList from "../../components/news-list"
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const HomePage=()=>{
  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();
  return isAuth ? (
    <div>
        <NewsList/>
        <button
            onClick={()=> dispatch(removeUser())}
        >Log out from {email}</button>
    </div>
) : (
    <div></div>
)
}
export default HomePage