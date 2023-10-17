import React, { useContext, useState } from 'react';
import { Modal } from '@mui/material';
import style from './NavBar.module.css';
import logo from '../../Images/logo.png';
import usaFlag from '../../Images/us.svg';
import spainFlag from '../../Images/es.svg';
import { LenguageContext } from '../../shared/context/LenguageContext';
import { lenguageEnum } from '../../shared/enums/lenguage.enum';

const NavBar = () => {

  const [modalOpen, setmodalOpen] = useState(false)

  const { lenguage, setLenguage } = useContext(LenguageContext);


  const abrirModal = () => {
    setmodalOpen(true)
  }
  const cerrarModal = () => {
    setmodalOpen(false)
  }

  const changeIdiom = (idiom) => {
    if (idiom === 'es') {
      setLenguage('es')
      cerrarModal()
    }
    else if (idiom === 'en') {
      setLenguage('en')
      cerrarModal()
    }
  }

  return (
    <div className={style.page}>
      <div id='NavBar' className={style.navContainer} >
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.itemsCointainer}>
          <div className={style.navItems}>
            <a href="#Home">{lenguage === lenguageEnum.en ? 'Home' : 'Inicio'}</a>
          </div>
          <div className={style.navItems}>
            <a href="#About">{lenguage === lenguageEnum.en ? 'About' : 'Acerca de'}</a>
          </div>
          <div className={style.navItems}>
            <a href="#Contact">{lenguage === lenguageEnum.en ? 'Contact' : 'Contacto'}</a>
          </div>
          <div className={style.flagIdiomCont}>
            <img className={style.selectedFlag} onClick={abrirModal} src={lenguage === 'en' ? usaFlag : spainFlag} alt="flag" />
            <Modal
              open={modalOpen}
              onClose={cerrarModal}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <div
                className={style.modalFlags}
                data-aos="fade-left">
                <img onClick={() => changeIdiom('en')} className={style.usaFlag} src={usaFlag} alt="flag" />
                <img onClick={() => changeIdiom('es')} className={style.spaFlag} src={spainFlag} alt="flag" />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar