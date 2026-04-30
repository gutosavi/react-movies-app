import React from 'react';
import styles from './Contact.module.css';
import { GiSpockHand } from 'react-icons/gi';
import { CiMail } from 'react-icons/ci';
import Textarea from '../Form/Textarea';
import FormData from '../Context/FormData';
console.log('Teste:', styles);

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.contactGrid}>
        <div className={styles.contactBox}>
          <div>
            <h1 className={styles.contactTitle}>
              Vamos conversar.<br></br> Fale-me sobre seu projeto.
            </h1>
            <p className={styles.contactSubTitle}>
              Vamos criar alguma coisa juntos <GiSpockHand color="#EDE8D0" />
            </p>
          </div>
          <div className={styles.contactEmail}>
            <div className={styles.mailIcon}>
              <CiMail />
            </div>
            <div className={styles.sendEmail}>
              <p>Mande-me um e-mail</p>
              <span>gutosavi@hotmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h2>Contate-me:</h2>
          <FormData />
        </div>
      </div>
    </section>
  );
};

export default Contact;
