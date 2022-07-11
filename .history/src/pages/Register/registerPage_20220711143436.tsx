import { Link } from "react-router-dom"
import Register from "../../components/form/Register"

const RegisterPage=()=>{
  return (
    <div className="auth-form">
        <h1>Register</h1>
        <Register />
        <p className="cap">
            Already have an account? <Link to="/login">Sign in</Link>   
        </p>            
    </div>
)
}
export default RegisterPage