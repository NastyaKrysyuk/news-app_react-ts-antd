import NewsList from "../../components/news-list"

const HomePage=()=>{
  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();
return(
  <NewsList/>
)
}
export default HomePage