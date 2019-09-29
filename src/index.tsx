import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.component';
import './index.pcss';

const rootElement = document.querySelector('.root');

ReactDom.render(<App />, rootElement);
