import Register from "../../components/form/Register"

const RegisterPage=()=>{
  return (
    <div>
        <h1>Register</h1>
        <Register />
        <p>
            Already have an account? <Link to="/login">Sign in</Link>   
        </p>            
    </div>
)
}
export default RegisterPage