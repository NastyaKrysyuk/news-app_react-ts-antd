import { Navigate } from "react-router-dom";
import NewsList from "../../components/news-list"
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  console.log(isAuth)

  return (
    isAuth ?
      <div>
        <NewsList />
      </div>
      : (
        <Navigate to="/login" replace />
      )
  )
}
export default HomePage