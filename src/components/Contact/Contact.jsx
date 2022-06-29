import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {

  let [input, setInput] = useState({
    message: ""
  })

  function onInputChange(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const incompleteError = (e) => {
    toast.error('Complete the message!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  useEffect(() => {
    Aos.init({ duration: 500, once: true })
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3yfw79', 'template_9vlleqb', form.current, '2_ZMgaO2wSdxYkzMX')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='Contact' className={style.page}>

      <div className={style.textContainer}>
        <p className={style.contact}>CONTACT</p>
        <p className={style.question}>Have a question or want to work together?</p>
      </div>

      <form className={style.formContainer} ref={form} onSubmit={sendEmail}>

        <div className={style.cont} data-aos="fade-right">
          <label className={style.labels}>Name</label>
          <input  type="text" name="user_name" required/>
        </div>

        <br />

        <div className={style.cont} data-aos="fade-left">
          <label className={style.labels}>Email</label>
          <input  type="email" name="user_email" required/>
        </div>

        <br />

        <div className={style.cont} data-aos="fade-right">
          <label className={style.labels}>Message</label>
          <textarea className={style.areaText} name="message" onChange={(e)=>onInputChange(e)}/>
        </div>

        <br />

        <div className={style.cont} >
          {
            input.message.length?
            <input className={style.submit} type="submit" value="Send"  required/>
          :<button className={style.noSubmit} onClick={(e)=>incompleteError(e)}>Complete to send</button>
          }
        </div>

      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs
