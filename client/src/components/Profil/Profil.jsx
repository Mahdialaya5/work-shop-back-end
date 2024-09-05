import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrent } from '../../redux/actions/ActionUser'

function Profil() {
  
 const dispatch=useDispatch()

  useEffect(() => {
  
    dispatch(getCurrent())
  
  }, [])
  
  const user=useSelector(state=>state.UserReducer.currentuser)

  return (
    <div>
    <h3>username:{user.username}</h3>
     <p>email:{user.email}</p>
      </div>
  )
}

export default Profil