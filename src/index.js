import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

import { Provider } from 'react-redux';
import configStore from './configStore';

// Import Components
import { App } from './components/App';

const options = {
  position: 'bottom right',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

ReactDOM.render(
  <Provider
    store={configStore}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App/>
    </AlertProvider>
  </Provider>
,document.getElementById('root'));
