import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormComponent from "./Form";
import { setUser } from '../../store/slices/auth-slice'
import { useAppDispatch } from "../../hook/redux-hook";
import { useEffect } from "react";


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let location: any = useLocation();

    let from = location.state?.from?.pathname || "/";
    const auth = getAuth();
  
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user?.email) {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
                navigate(from, { replace: true });
            }
        })
    }, []);

    const handleLogin = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
                navigate('/', { replace: true });
                if(!localStorage.getItem('readingList')) localStorage.setItem('readingList','[]');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <FormComponent
            title="sign in"
            handleClick={handleLogin}
        />
    )
}
export default Login