import { Link } from "react-router-dom"
import Register from "../../components/form-logreg/Register"

const RegisterPage = () => {
    return (
        <div className="auth-form">
            <div>
                <h1>Register</h1>
                <Register />
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
            <div className="img-content">
            </div>
        </div>
    )
}
export default RegisterPage