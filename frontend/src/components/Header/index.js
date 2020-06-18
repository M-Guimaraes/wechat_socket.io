import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
const Header =  () => {

  const user = useSelector(state => state.user)

  return (<>
  <div className="header">
    <div className="title">WeChat<span></span></div>
    {user && user.name && <div className="user-name">Olá, {user.name} !!!</div> }
  
  </div>
  </>);
}

export default Header;