import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {ConfigProvider} from 'react-avatar';

import App from './App';

ReactDOM.render(
  <ConfigProvider colors={['#7e3794', '#67ae3f', '#4285f4', '#ff4080', '#ffcc6b', '#ab2f52']}>
    <BrowserRouter>
      <Route path='/' component={App}/>
    </BrowserRouter>
  </ConfigProvider>
  , document.getElementById('root'));
