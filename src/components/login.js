import React,{useState} from 'react';
import {login, logout} from '../features/user'
import {useDispatch} from 'react-redux'
function Login() {
  const dispatch = useDispatch();
  const [names, setName] = useState('');
  return(
   <div>
     <input type="text" onChange={(e) => setName(e.target.value) }  name="" id="" />
      <button onClick={() => {
        dispatch(login({name:names , age:10, email:"tahaimran.24@gmail.com"}))
        }}>Login</button>

        <button onClick={() => {
          dispatch(logout())
        }} >
          LogOut
        </button>
  </div>
  )
}

export default Login;
