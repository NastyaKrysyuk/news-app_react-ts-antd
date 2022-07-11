import NewsList from "../../components/news-list"
import { useAppDispatch } from "../../hook/redux-hooks";

const HomePage=()=>{
  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();
return(
  <NewsList/>
)
}
export default HomePage