import React, { useContext } from 'react'
import style from './About.module.css'
import token from '../../Images/token.png'
import token_2 from '../../Images/token_2.png'
import token_3 from '../../Images/token_3.png'
import token_4 from '../../Images/token_4.png'
import token_5 from '../../Images/token_5.png'
import token_6 from '../../Images/token_6.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaLinux } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiRedux, SiSequelize, SiTypescript, SiMongodb } from 'react-icons/si';
import { LenguageContext } from '../../shared/context/LenguageContext'
import { lenguageEnum } from '../../shared/enums/lenguage.enum'


const About = () => {

  useEffect(() => {
    Aos.init({ duration: 500, once: true })
  }, [])

  const { lenguage } = useContext(LenguageContext);

  return (
    <div id='About' className={style.container}>

      <div className={style.bloque1}>
        <div className={style.subBloque1}>

          <div data-aos="zoom-out-right" className={style.softTitle}>{lenguage === lenguageEnum.en ? 'Soft Skills' : 'Habilidades Blandas'}</div>
          <div data-aos="zoom-out-right" className={style.tokenContainer}>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_2} alt="skills" />
              <p>{lenguage === lenguageEnum.en ? 'Team work' : 'Trabajo en equipo'}</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_3} alt="skills" />
              <p>{lenguage === lenguageEnum.en ? 'Fast' : 'Rapido'}</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_4} alt="skills" />
              <p>{lenguage === lenguageEnum.en ? 'Creative' : 'Creativo'}</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_5} alt="skills" />
              <p>{lenguage === lenguageEnum.en ? 'Listener' : 'Oyente'}</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_6} alt="skills" />
              <p>{lenguage === lenguageEnum.en ? 'Communicative' : 'Comunicativo'}</p>
            </div>
          </div>
        </div>
        <div className={style.subBloque2} >
          <div data-aos="fade-up" className={style.softTitle}>{lenguage === lenguageEnum.en ? 'Tech Skills' : 'Habilidades Tecnicas'}</div>
          <div data-aos="fade-up" className={style.row1}>
            <FaReact className={style.images} />
            <FaHtml5 className={style.images} />
            <FaJsSquare className={style.images} />
            <FaCss3Alt className={style.images} />
            <SiRedux className={style.images} />
            <SiExpress className={style.images} />
            <FaNodeJs className={style.images} />
          </div>
          <div data-aos="fade-up" className={style.row2} >

            <FaGitAlt className={style.images} />
            <FaGithub className={style.images} />
            <SiPostgresql className={style.images} />
            <SiTypescript className={style.images} />
            <SiSequelize className={style.images} />
            <FaLinux className={style.images} />
            <SiMongodb className={style.images} />

          </div>
        </div>
      </div>

      <div className={style.bloque2}>
        <div>
          <img data-aos="zoom-out-left" className={style.huevo} src={token} alt="token image" />
        </div >
        <div data-aos="fade-up" className={style.text1} >{lenguage === lenguageEnum.en ? 'Who i am?' : '¿Quien soy yo?'}</div>

        <div data-aos="fade-up" className={style.text2} >
          {lenguage === lenguageEnum.en ? (
            <>
              <p>I'm a Full Stack Developer from Buenos Aires, Argentina.<br />
                I have a serious passion for Frontend development, UI Design<br />
                animations and dynamic user experiences.<br /></p>
            </>
          ) : (
            <>
              <p>Soy un desarrollador full stack de Buenos Aires, Argentina.<br />
                Con una gran pasión por el desarrollo frontend, diseño UI<br />
                animaciones y experiencias de usuario dinámicas.<br /></p>
            </>
          )}
        </div>
        <a data-aos="fade-up" href="#Contact">
        
          <p className={style.special}>› {lenguage === lenguageEnum.en ? `Let's make something special!`:'¡Hagamos algo especial!'} ‹</p>
        </a>
      </div>

    </div>
  )
}

export default About