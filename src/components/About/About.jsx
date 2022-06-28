import React from 'react'
import style from './About.module.css'
import css from '../../Images/css.png'
import express from '../../Images/express.png'
import git from '../../Images/git.png'
import github from '../../Images/github.png'
import html from '../../Images/html.png'
import js from '../../Images/js.png'
import linux from '../../Images/linux.png'
import node from '../../Images/node.png'
import postgresql from '../../Images/postgresql.png'
import react from '../../Images/react.png'
import redux from '../../Images/redux.png'
import sequelize from '../../Images/sequelize.png'
import ts from '../../Images/ts.png'
import token from '../../Images/token.png'
import token_2 from '../../Images/token_2.png'
import token_3 from '../../Images/token_3.png'
import token_4 from '../../Images/token_4.png'
import token_5 from '../../Images/token_5.png'
import token_6 from '../../Images/token_6.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const About = () => {

useEffect (()=> {
Aos.init({duration: 500})
},[])

  return (
    <div id='About' className={style.container}>

      <div className={style.bloque1}>
        <div className={style.subBloque1}>

          <div data-aos="zoom-out-right"  className={style.softTitle}>Soft Skills</div>
          <div data-aos="zoom-out-right"  className={style.tokenContainer}>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_2} alt="skills" />
              <p>Team work</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_3} alt="skills" />
              <p>Fast</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_4} alt="skills" />
              <p>Creative</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_5} alt="skills" />
              <p>Listener</p>
            </div>
            <div className={style.tokenywordContainer}>
              <img className={style.tokenImage} src={token_6} alt="skills" />
              <p>Communicative</p>
            </div>
          </div>
        </div>
        <div className={style.subBloque2} >
          <div data-aos="fade-up" className={style.softTitle}>Tech Skills</div>
          <div  data-aos="fade-up" className={style.row1}>
            <img  className={style.images} src={react} alt="image" />
            <img  className={style.images} src={html} alt="image" />
            <img  className={style.images} src={js} alt="image" />
            <img  className={style.images} src={css} alt="image" />
            <img  className={style.images} src={redux} alt="image" />
            <img  className={style.images} src={express} alt="image" />
            <img  className={style.images} src={node} alt="image" />
          </div>
          <div data-aos="fade-up" className={style.row2} >
            <img  className={style.images} src={git} alt="image" />
            <img  className={style.images} src={github} alt="image" />
            <img  className={style.images} src={postgresql} alt="image" />
            <img  className={style.images} src={ts} alt="image" />
            <img  className={style.images} src={sequelize} alt="image" />
            <img  className={style.images} src={linux} alt="image" />
          </div>
        </div>
      </div>

      <div  className={style.bloque2}>
        <div>
          <img data-aos="zoom-out-left" className={style.huevo} src={token} alt="token image" />
        </div >
        <div data-aos="fade-up" className={style.text1} >who I am ?</div>
        <div data-aos="fade-up" className={style.text2} >I'm a Full Stack Developer from Buenos Aires, Argentina.<br/>
          I have serious passion for Frontend development, UI Design<br/> animations and dynamic user experiences. <br/>
         </div>
         <a data-aos="fade-up" href="#Contact">
         <p className={style.special}>› Let's make something special ‹</p>
         </a>
      </div>

    </div>
  )
}

export default About