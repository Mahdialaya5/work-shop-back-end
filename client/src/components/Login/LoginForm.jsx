import React from 'react'
import style from './login.module.css'

function LoginForm() {
  return (
<form  className={style.form} >
     <label>email</label>
     <input className={style.input} />
     <label>password</label>
     <input className={style.input}  />
    <button className={style.btn}  >submit</button>

    </form>
  )
}

export default LoginForm