import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';

import './styles.css'

import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Amazing that you want teach classes"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>About You</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Class details</legend>

          <Input name="subject" label="Subject" />
          <Input name="cost" label="Class cost per Hour" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
