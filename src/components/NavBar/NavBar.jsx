import React from 'react'
import style from './NavBar.module.css'
import logo from '../../Images/logo.png'
const NavBar = () => {
  return (
   <div className={style.page}>
      <div id='NavBar' className={style.navContainer} >
        <div>
          <img className={style.logo} src={logo} alt="logo" />
        </div>
        <div className={style.itemsCointainer}>
          
          <div className={style.navItems}>
            <a href="#Home">Home</a>
          </div>
          <div className={style.navItems}>
            <a href="#About">About</a>
          </div>
          <div className={style.navItems}>
            <a href="#Projects">Projects</a>
          </div>
          <div className={style.navItems}>
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
   </div>
  )
}

export default NavBar