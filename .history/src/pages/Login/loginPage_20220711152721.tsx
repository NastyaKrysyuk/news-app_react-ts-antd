import { Link } from "react-router-dom"
import Login from "../../components/form/Login"

const LoginPage=()=>{
  return (
    <div className="auth-form">
        <div></div>
        <h1>Login</h1>
        <Login />
        <p>
            Or <Link to="/register">register</Link>
        </p>
       <div className="img-content">
       </div>
    </div>
)

}
export default LoginPage