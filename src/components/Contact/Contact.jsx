import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const ContactUs = () => {

  useEffect (()=> {
    Aos.init({duration: 500, once:true})
    },[])

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
      <form className={style.formContainer} ref={form} onSubmit={sendEmail}>

        <div className={style.cont} data-aos="fade-right">
        <label className={style.labels}>Name</label>
        <input type="text" name="user_name" />
        </div>

        <br />
      
        <div className={style.cont} data-aos="fade-left">
        <label className={style.labels}>Email</label>
        <input type="email" name="user_email" />
        </div>

        <br />

        <div className={style.cont} data-aos="fade-right">
        <label className={style.labels}>Message</label>
        <textarea className={style.textareaa} name="message" />
        </div>

        <br />

        <div className={style.cont} data-aos="fade-left">
        <input className={style.submit} type="submit" value="Send" />
        </div>

      </form>
    </div>
  );
};

export default ContactUs
