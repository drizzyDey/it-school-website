import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cefzlgl', 'template_1skc0fp', form.current, 'GQ8NJO8fSLaEw91LO')
      .then((result) => {
          console.log('Sent', result.text);
      }, (error) => {
          console.log('Something went wrong', error.text);
      });
      e.target.reset();
  };

  return (
    <div id='contact-form' className='contact-section'>
      <h2>Contact Us</h2>
      <form ref={form} className='form' onSubmit={handleSend}>
        <input type='text' placeholder='Full name' name='user_name' required />
        <input type='email' placeholder='Email' name='user_email' required />
        <input type='text' placeholder='Phone number' name='user_number' />
        <textarea name='message' cols='30' rows='6'>Enter your message</textarea>
        <button className='send-btn'>Send message</button>
      </form>
    </div>
  );
};

export default ContactForm;