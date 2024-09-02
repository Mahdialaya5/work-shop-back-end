import React from 'react'
import style from './Register.module.css'
import { Link } from 'react-router-dom'

function RegisterUser() {
  return (
    <form  className={style.form} >
     <label>username</label>
     <input  className={style.input}  />
     <label>email</label>
     <input className={style.input} />
     <label>password</label>
     <input className={style.input}  />
    <button className={style.btn}  >submit</button>

    </form>
  )
}

export default RegisterUser