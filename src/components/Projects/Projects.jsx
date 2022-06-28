import React from 'react'
import IndividualProject from '../IndividualProject/IndividualProject'
import style from './Projects.module.css'



const Projects = () => {
  return (
    <div id='Projects' className={style.page}>
        <IndividualProject/>
    </div>
  )
}

export default Projects