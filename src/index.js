import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QueryState from './context/query/QueryState';
import AlertState from './context/alert/AlertState';
import App from './containers/App';

const root = document.getElementById('root');
ReactDOM.render(
  <QueryState>
    <AlertState>
      <App />
    </AlertState>
  </QueryState>,
  root
);
