import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Switch } from 'wouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Switch>
      <Route path="/"><App /></Route>
    </Switch>
  </React.StrictMode>
);
