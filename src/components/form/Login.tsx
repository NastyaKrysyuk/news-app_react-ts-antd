import { useNavigate } from "react-router-dom"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormComponent from "./Form";
import {setUser} from '../../store/slices/authSlices'
import { useAppDispatch } from "../../hook/redux-hooks";
import {useEffect} from "react";


const Login=()=>{
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user?.email) {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/', { replace: true });
            }
        })

    }, []);

  const handleLogin = (email: string, password: string) => {
      signInWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              console.log(user);
              dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.refreshToken,
              }));
              navigate('/', { replace: true });
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