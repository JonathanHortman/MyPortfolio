import React from 'react'
import style from './IndividualProject.module.css'


const IndividualProject = (props) => {
  return (
    <div className={style.imgContainer}>
      <div className={style.box}>
        <img src={props.img} alt="imagen" />
        <div className={style.hover}>
          <h1>LEARN MORE</h1>
        </div>
      </div>
    </div>
  )
}

export default IndividualProject