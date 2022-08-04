import React from 'react'
import style from './Modal.module.css'
import { FaGithub, FaChrome } from 'react-icons/fa';

const Modal = (props) => {
  return (
    <div className={style.modalContainer}>
      <button className={style.closeButton} name="close" onClick={(e) => props.handleModal(e)}>X</button>
      <div className={style.imgContainerRow1}>
        <img src={props.img1} alt="image 1" />
        <img src={props.img2} alt="image 2" />
      </div>
      <div className={style.imgContainerRow2}>
        <img src={props.img3} alt="image 3" />
        <img src={props.img4} alt="image 4" />
      </div>
      <div className={style.projectTitle}>
        <div>{props.title}</div>
        <div className={style.iconsContainer}>
          {
            props.deploy ?
              <a className={style.links} href={props.deploy} target="_blank">
                <FaChrome className={style.icons} />
              </a>
              : null
          }
          {
            props.repo ?
              <a className={style.links} href={props.repo} target="_blank">
                <FaGithub className={style.icons} />
              </a>
              : null
          }
        </div>
      </div>
      <div className={style.projectDescription}>{props.description}</div>
    </div>
  )
}

export default Modal