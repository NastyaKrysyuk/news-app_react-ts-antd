import { useNavigate } from "react-router-dom"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormComponent from "./Form";
import {setUser} from '../../store/slices/authSlices'
import { useAppDispatch } from "../../hook/redux-hooks";


const Login=()=>{
  const dispatch = useAppDispatch();
  const push = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              console.log(user);
              dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.refreshToken,
              }));
              push('/');
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