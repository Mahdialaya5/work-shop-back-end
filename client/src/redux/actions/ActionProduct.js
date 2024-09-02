import axios from "axios"
import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT, GETPRODUCTS } from "../const/products";

export const GetProducts = () => async (dispatch) => {
  try {
    
    const res= await axios.get('http://localhost:4000/api/product')
    console.log(res.data);
    dispatch({
        type:GETPRODUCTS,
        payload:res.data
    })
  } catch (error) {
     console.log(error);
}}

export const addProduct = (body) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/product',body)
      dispatch({
          type:ADDPRODUCT,
          Payload:res
      })
    } catch (error) {
       console.log(error);
  
  }}

  export const editProduct = (id) => async (dispatch) => {
    try {
  
      const token= document.cookie('token')
      const res= await axios.patch(`http://localhost:4000/api/product/${id}`,{ headers: { Authorization: `Bearer ${token}`} })
      dispatch({
          type:EDITPRODUCT,
          Payload:res
      })
    } catch (error) {
       console.log(error);
  
  }}


export const deleteProduct = (id) => async (dispatch) => {
    try {
  
      const token= document.cookie('token')
      const res= await axios.delete(`http://localhost:4000/api/product/${id}`,{ headers: { Authorization: `Bearer ${token}`} })
      dispatch({
          type:DELETEPRODUCT,
          Payload:res
      })
    } catch (error) {
       console.log(error);
  
  }}