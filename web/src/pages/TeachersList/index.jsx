import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import Input from '../../components/Input';

import './styles.css';

const TeachersList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Here is all the Proffys available">
        <form id="search-teachers">
          <Input name="subject" label="Subject"/>
          <Input name="week_day" label="Week Day"/>
          <Input type="time" name="time" label="Time"/>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
      
    </div>
  );
};

export default TeachersList;
