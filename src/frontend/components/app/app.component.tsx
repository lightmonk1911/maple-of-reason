import React from 'react';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { routes } from '../../navigation/navigation';
import { PageRouter } from '../page-router/page-router.component';

const App: React.FunctionComponent<BrowserRouterProps> = () => {
  return (
    <BrowserRouter>
      <PageRouter routes={routes} />
    </BrowserRouter>
  );
};

export default App;
