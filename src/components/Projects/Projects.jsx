import React from 'react'
import IndividualProject from '../IndividualProject/IndividualProject'
import style from './Projects.module.css'
import pokemon from '../../assets/pokemon.png'
import soundwave from '../../assets/soundwave.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Projects = () => {

  useEffect (()=> {
    Aos.init({duration: 500, once:true})
    },[])

  return (
    <div id='Projects' className={style.page}>

      <div className={style.projectsContainers} data-aos="fade-right">
        <IndividualProject img={pokemon}/>
      </div>
      <div className={style.projectsContainers} data-aos="fade-left">
        <IndividualProject img={soundwave}/>
      </div>

    </div>
  )

}

export default Projects