import axios from "axios";
import { LOGIN, REGISTER, REGISTERFAILED } from "../const/user"

export const register = (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/user/register',body)
      console.log(res.data);
      dispatch({
          type:REGISTER,
          payload:res.data
      })
      navigate('/profil')
    } catch (error) {
        dispatch({
            type:REGISTERFAILED,
            payload:error
        })
       console.log(error);
  
  }}

  export const login= (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/user/register',body)
      dispatch({
          type:LOGIN,
          payload:res.data
      })
     
    } catch (error) {
       console.log(error);
  
  }} 