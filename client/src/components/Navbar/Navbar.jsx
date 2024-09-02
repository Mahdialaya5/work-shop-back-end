import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
         <Link to='/' > <button className={style.btn}>Home</button></Link>
        </li>
        <li>
         <Link to='/login'   ><button className={style.btn}>login</button></Link> 
        </li>
        <li>
         <Link to='/register' > <button className={style.btn}> register</button> </Link>
        </li>
        <li>
         <Link to='/profil' > <button className={style.btn}> profil</button> </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
