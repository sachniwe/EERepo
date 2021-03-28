import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import SalesPage from './pages/SalesPage';
import DonationsPage from './pages/DonationsPage';
import Header from './pages/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <div>
        <Route path="/bakedItems" component={SalesPage} />
        <Route path="/donations" component={DonationsPage} />
      </div>
    </BrowserRouter>
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
