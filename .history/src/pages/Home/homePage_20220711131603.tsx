import NewsList from "../../components/news-list"
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";

const HomePage=()=>{
  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();
  return isAuth ? (
    <div>
        <h1>Welcome</h1>

        <button
            onClick={()=> dispatch(removeUser())}
        >Log out from {email}</button>
    </div>
) : (
    <Redirect to="/login" />
)
}
export default HomePage