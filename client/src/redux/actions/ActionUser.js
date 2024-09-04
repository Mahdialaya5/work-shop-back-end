import axios from "axios";
import { LOGIN, LOGINFAILED, REGISTER, REGISTERFAILED } from "../const/user"

export const register = (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/user/register',body)
      console.log(res.data)
      dispatch({
          type:REGISTER,
          payload:res.data
      })
      navigate('/login')
    } catch (error) {
        dispatch({
            type:REGISTERFAILED,
            payload:error.response.data.errors
        })

  }}

export const login= (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/user/login',body)
      dispatch({
          type:LOGIN,
          payload:res.data
      })
     navigate('/profil')
    } catch (error) {
      dispatch({
        type:LOGINFAILED,
        payload:error.response.data
    })
     console.log(error.response.data);
  }} 