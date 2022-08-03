import { Link } from "react-router-dom"
import Login from "../../components/form-authentication/Login"

const LoginPage = () => {
    return (
        <div className="auth-form">
            <div>
                <h1>Login</h1>
                <Login />
                <p>
                    Or <Link to="/register">register</Link>
                </p>
            </div>
            <div className="img-content"/>
        </div>
    )

}
export default LoginPage