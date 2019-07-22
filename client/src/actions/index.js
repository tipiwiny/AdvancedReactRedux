import axios from 'axios';
import { AUTH_USER, AUTH_ERROR} from './types';

export const signup = ({email,password}, cb) => async dispatch=> {
  try {
    const response =  await axios.post('http://localhost:3090/signup',{email,password})
    dispatch({type: AUTH_USER, payload: response.data.token})
    localStorage.setItem('token', response.data.token)
    cb()
  } catch(e) {
    debugger
    dispatch({type: AUTH_ERROR, payload: e.response.data.error})
  }
}

export const signout = () => {
  localStorage.removeItem('token')
  return {
    type: AUTH_USER,
    payload: ''
  }
}


export const signin = ({email,password}, cb) => async dispatch=> {
  try {
    const response =  await axios.post('http://localhost:3090/signin',{email,password})
    dispatch({type: AUTH_USER, payload: response.data.token})
    localStorage.setItem('token', response.data.token)
    cb()
  } catch(e) {
    debugger
    dispatch({type: AUTH_ERROR, payload: e.response.data})
  }
}
