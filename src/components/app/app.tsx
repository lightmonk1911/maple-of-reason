import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { routes } from '../../navigation/navigation';
import { NavBar } from '../navbar/index';
import { PageRouter } from '../page-router/index';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar routes={routes} />
      <PageRouter routes={routes} />
    </BrowserRouter>
  );
};

export default App;
