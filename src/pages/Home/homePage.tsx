import { Navigate } from "react-router-dom";
import NewsList from "../../components/news-list"
import { useAppDispatch } from "../../hook/redux-hooks";
import { useAuth } from "../../hook/use-auth";
import { removeUser } from "../../store/slices/authSlices";

const HomePage = () => {

  return (
    <div>
        <NewsList />
    </div>
  )
}
export default HomePage