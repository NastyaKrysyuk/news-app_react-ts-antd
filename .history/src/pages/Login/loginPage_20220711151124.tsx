import { Link } from "react-router-dom"
import Login from "../../components/form/Login"
import img from '../../images/lady-employee-doing-video-meeting-2194238.png'

const LoginPage=()=>{
  return (
    <div className="auth-form">
        <h1>Login</h1>
        <Login />
        <p>
            Or <Link to="/register">register</Link>
        </p>
       <div>
       <Image>
       </div>
    </div>
)

}
export default LoginPage