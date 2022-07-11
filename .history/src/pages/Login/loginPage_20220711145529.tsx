import { Link } from "react-router-dom"
import Login from "../../components/form/Login"

const LoginPage=()=>{
  return (
    <div className="auth-form">
        <h1>Login</h1>
        <Login />
        <p>
            Or <Link to="/register">register</Link>
        </p>
       <div>
       
1
2
3
<object type="image/svg+xml" data="image.svg" width="200" height="200" >
   Your browser does not support SVG
</object>
       </div>
    </div>
)

}
export default LoginPage