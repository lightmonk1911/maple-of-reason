import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRouter, { NavBar, routes } from '../navigation/navigation';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar routes={routes} />
        <PageRouter routes={routes} />
      </BrowserRouter>
    </>
  );
};

export default App;
