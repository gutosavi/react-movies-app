import React from 'react';
import './Contact.css';
import { GiSpockHand } from 'react-icons/gi';
import { CiMail } from 'react-icons/ci';
import Textarea from '../Form/Textarea';
import FormData from '../Context/FormData';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-grid">
        <div className="contact-box">
          <div>
            <h1 className="contact-title">
              Vamos conversar.<br></br> Fale-me sobre seu projeto.
            </h1>
            <p className="contact-sub-title">
              Vamos criar alguma coisa juntos <GiSpockHand color="#EDE8D0" />
            </p>
          </div>
          <div className="contact-email">
            <div className="mail-icon">
              <CiMail />
            </div>
            <div className="send-email">
              <p>Mande-me um e-mail</p>
              <span>gutosavi@hotmail.com</span>
            </div>
          </div>
        </div>
        <div className="form-container">
          <h2>Contate-me:</h2>
          <FormData />
        </div>
      </div>
    </section>
  );
};

export default Contact;
