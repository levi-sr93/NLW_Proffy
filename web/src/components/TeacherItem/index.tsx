import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/49613573?s=460&u=30be8682a70012359b077398b6911ea2ab64c6c6&v=4" 
          alt="Levi Santos"/>

        <div>
          <strong>Levi Santos</strong>
          <span>Programação</span>
        </div>
      </header>
        <p>
          Desenvolvimento de sites e sistemas web utilizando tecnologias modernas
          <br />
          <br />
          Utiliza primariamente a stack javascript para Web e mobile.
        </p>
      <footer>
        <p>Preço/Hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>

    </article>
  )
}

export default TeacherItem;