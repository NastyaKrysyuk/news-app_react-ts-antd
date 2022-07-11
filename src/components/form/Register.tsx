import {useNavigate} from 'react-router-dom';

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import FormComponent from "./Form";
import {setUser} from '../../store/slices/authSlices'
import { useAppDispatch } from "../../hook/redux-hooks";

const Register=()=>{
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleRegister = (email: string, password: string) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              console.log(user);
              dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.refreshToken,
              }));
              push('/');
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