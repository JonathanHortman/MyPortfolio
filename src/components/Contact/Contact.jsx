import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"
export const ContactUs = () => {
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
        <label>Name</label>
        <input type="text" name="user_name" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <label>Message</label>
        <textarea name="message" />
        <br />
        <input className={style.submit} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs
