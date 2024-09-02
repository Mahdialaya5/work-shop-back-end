
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilPage from "./pages/ProfilPage";
import { useDispatch } from "react-redux";
import { GetProducts } from "./redux/actions/ActionProduct";
import { useEffect } from "react";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
 
  const dispatch=useDispatch()

 useEffect(() => {
    dispatch(GetProducts())
  }, [])
  
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/register"  element={<Register/>}  />
      <Route path="/login"  element={<Login/>} />
      <Route path="/profil"  element={<ProfilPage/>} />
      <Route path="/addproduct"  element={<AddProduct/>} />
    </Routes>
  );
}

export default App;
