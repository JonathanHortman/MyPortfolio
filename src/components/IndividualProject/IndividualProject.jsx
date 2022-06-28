import React from 'react'
import style from './IndividualProject.module.css'


const IndividualProject = (props) => {

  


  return (

    <div className={style.imgContainer}>

      <div className={style.box}>
        <img src={props.img} alt="imagen" />
        <div className={style.hover}>
          <button onClick={(e) => props.handleModal(e)} name={props.name} >LEARN MORE</button>
        </div>
      </div>

    </div>



  )
}

export default IndividualProject