import React from 'react';
import './Contact.css';
import { GiSpockHand } from 'react-icons/gi';
import { CiMail } from 'react-icons/ci';
import { IoIosRocket } from 'react-icons/io';

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
          <form>
            <input type="text" placeholder="Nome completo" />
            <input type="mail" placeholder="Endereço de e-mail" />
            <textarea
              name="text-area"
              id="text-area"
              rows="10"
              cols="30"
              placeholder="Me fale um pouco sobre seu projeto"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
