import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeachersList from './pages/TeachersList';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeachersList} />
      <Route path="/teach" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
