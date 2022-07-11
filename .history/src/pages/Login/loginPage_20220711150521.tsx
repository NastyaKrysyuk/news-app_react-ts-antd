import { Link } from "react-router-dom"
import Login from "../../components/form/Login"
import img from '../'

const LoginPage=()=>{
  return (
    <div className="auth-form">
        <h1>Login</h1>
        <Login />
        <p>
            Or <Link to="/register">register</Link>
        </p>
       <div>
       <img src="/lady-employee-doing-video-meeting-2194238.png" width={500} height={500} alt="" />
       </div>
    </div>
)

}
export default LoginPage