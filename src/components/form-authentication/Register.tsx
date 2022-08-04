import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FormComponent from "./Form";
import { setUser } from '../../store/slices/auth-slice'
import { useAppDispatch } from "../../hook/redux-hook";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let location: any = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
                navigate(from, { replace: true });
                if(!localStorage.getItem('readingList')) localStorage.setItem('readingList','[]');
            })
            .catch(console.error)
    }

    return (
        <FormComponent
            title="register"
            handleClick={handleRegister}
        />
    )
}
export default Register