import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeachersList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Here is all the Proffys available">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Week day</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
    </div>
  );
};

export default TeachersList;
