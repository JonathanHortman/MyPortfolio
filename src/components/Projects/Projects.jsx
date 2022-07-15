import React, { useState } from 'react'
import IndividualProject from '../IndividualProject/IndividualProject'
import style from './Projects.module.css'
import pokemon from '../../assets/pokemon.png'
import soundwave from '../../assets/soundwave.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Modal from '../Modal/Modal'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/sound1.png'
import img6 from '../../assets/sound2.png'
import img7 from '../../assets/sound3.png'
import img8 from '../../assets/sound4.png'

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
            <Modal handleModal={handleModal} img1={img1} img2={img2} img3={img3} img4={img4} title='Individual proyect "Pokemon"' deploy="#" repo="https://github.com/JonathanHortman/Pi-Pokemon" description='i feel very proud to be able to show you mi individual project made in the bootcamp of Henry, where I could put my knowledge into practice and demostrate my imagination and professionalism to create features and styles.' />
          </div>
          : null
      }
      {
        modal.soundwave === true ?
          <div className={style.modalBackground}>
            <Modal handleModal={handleModal} img1={img5} img2={img6} img3={img7} img4={img8} title='Grupal proyect "SoundWave"' deploy="https://soundwave-swart.vercel.app/" repo="https://github.com/SoundWavePF" />
          </div>
          : null
      }


    </div>
  )

}

export default Projects