import { Link } from "react-router-dom"
import Register from "../../components/form/Register"

const RegisterPage=()=>{
  return (
    <div className="auth-">
        <h1>Register</h1>
        <Register />
        <p>
            Already have an account? <Link to="/login">Sign in</Link>   
        </p>            
    </div>
)
}
export default RegisterPage