import React, { StrictMode } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import Root from './client/Root';
import './index.css';
import './fontawesome/css/all.css'
import './index.css'
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  // <StrictMode>
    <Root/>
  // </StrictMode>
);

reportWebVitals();
