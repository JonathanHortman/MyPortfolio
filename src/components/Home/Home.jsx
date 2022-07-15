import React from 'react'
import style from './Home.module.css'
import signature from '../../Images/signature.mp4'
const Home = () => {
  return (
      <div id='Home' className={style.landing}>
        <video className={style.video} autoPlay muted >
          <source src={signature} type='video/mp4' />
        </video>
          <a href="#About" className={style.startButton}>
             VIEW MY WORK
          </a>
      </div>
  )
}

export default Home