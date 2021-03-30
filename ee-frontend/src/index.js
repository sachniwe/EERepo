import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import SalesPage from './pages/SalesPage';
import DonationsPage from './pages/DonationsPage';
import CartView from './pages/CartView';

ReactDOM.render(
  <React.StrictMode>
    <div className="grid-container">
      <header>
        <a href="#">EE Sales</a> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/bakedItems">Baked Items</a> &nbsp;&nbsp;
        <a href="/donations">Donations</a> &nbsp;&nbsp;
      </header>
    </div>
    <main>
      <div className="content">
      <BrowserRouter>
        <div>
          <Route path="/bakedItems" component={SalesPage} />
          <Route path="/donations" component={DonationsPage} />
        </div>
        
      </BrowserRouter>
      </div>
      <div className="sidebar">
        <CartView/>
      </div>
    
    </main>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
