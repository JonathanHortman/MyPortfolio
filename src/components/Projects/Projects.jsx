import React, { useState } from 'react'
import IndividualProject from '../IndividualProject/IndividualProject'
import style from './Projects.module.css'
import pokemon from '../../assets/pokemon.png'
import soundwave from '../../assets/soundwave.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Modal from '../Modal/Modal'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

const Projects = () => {
  const [modal, setModal] = useState({
    pokemon: false,
    soundwave: false,
  })

  let handleModal = (e) => {

    switch (e.target.name) {

      case "pokemon":
        return setModal({
          ...modal,
          pokemon: !modal.pokemon
        })

      case "soundwave":
        return setModal({
          ...modal,
          soundwave: !modal.soundwave
        })

      case "close":

        return setModal({
          pokemon: false,
          soundwave: false,
        })

      default:
        return modal
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500, once: true })
  }, [])

  return (
    <div id='Projects' className={style.page}>
      <div className={style.projectsContainers} data-aos="fade-right">
        <IndividualProject img={pokemon} name='pokemon' handleModal={handleModal} />
      </div>
      <div className={style.projectsContainers} data-aos="fade-left">
        <IndividualProject img={soundwave} name='soundwave' handleModal={handleModal} />
      </div>

      {
        modal.pokemon === true ?
          <div className={style.modalBackground}>
            <Modal handleModal={handleModal} img1={img1} img2={img2} img3={img3} img4={img4} title='Individual proyect "Pokemon"' description='bueno... aca deberia ir la descripcion del proyecto la cual no tengo ganas de escribir, sepan disculpar..' />
          </div>
          : null
      }
      {
        modal.soundwave === true ?
          <div className={style.modalBackground}>
            <Modal handleModal={handleModal} img1={img1} img2={img1} img3={img1} img4={img1} title='Grupal proyect "SoundWave"' description='bueno... aca deberia ir la descripcion del proyecto la cual no tengo ganas de escribir, sepan disculpar..' />
          </div>
          : null
      }


    </div>
  )

}

export default Projects