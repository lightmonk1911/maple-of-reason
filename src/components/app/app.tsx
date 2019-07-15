import React, { ReactElement } from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { routes } from '../../navigation/navigation';
import { NavBar } from '../navbar/index';
import { PageRouter } from '../page-router/index';

const App = (): ReactElement<BrowserRouterProps> => {
  return (
    <BrowserRouter>
      <NavBar routes={routes} />
      <PageRouter routes={routes} />
    </BrowserRouter>
  );
};

export default App;
