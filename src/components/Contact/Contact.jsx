import React from 'react';

const Contact = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Vamos conversar</h1>
          <p>Fale-me sobre seu projeto</p>
          <p>Vamos criar alguma coisa juntos.</p>
        </div>
        <div>
          <p>Me mande um e-mail</p>
          <span>gutosavi@hotmail.com</span>
        </div>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Nome completo" />
          <input type="mail" placeholder="Endereço de e-mail" />
          <textarea name="text-area" id="text-area" rows="10" cols="30">
            Me fale um pouco sobre seu projeto:
          </textarea>
        </form>
      </div>
    </section>
  );
};

export default Contact;
