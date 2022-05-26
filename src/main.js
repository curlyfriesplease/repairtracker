import React, { Component, useState, useContext, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import jQuery from 'jquery';
import $ from 'jquery';

import List from './components/list';
import Active from './components/active';
import Stats from './components/stats';
import Settings from './components/settings';
import Add from './components/add';
import Edit from './components/edit';

import ActiveCustomerBar from './components/footer';

import './styles/main.css';
import './styles/sidebar.css';

// Use react context to provide customer details, held in state within it
export const CustomerContext = React.createContext(null);
function CustomerContextProvider(props) {
  const [customer, setCustomer] = useState({ id: 'none' });
  return (
    <CustomerContext.Provider value={[customer, setCustomer]}>
      {props.children}
    </CustomerContext.Provider>
  );
}

// Compo to show the currently active customer
// function ActiveCustomerBar() {
//   const [customer] = useContext(CustomerContext);
//   return (
//     <>
//       <h4>ID: {customer.id}</h4>
//       <h4>Name: {customer.customer}</h4>
//       <h4>Item: {customer.itemDesc}</h4>
//       <h4>Work: {customer.workDesc}</h4>
//       <h4>status: {customer.status}</h4>
//       <h4>Time: 4hrs 35m</h4>
//     </>
//   );
// }

function Main(props) {
  const [activeCustomer, setActiveCustomer] = useState({ id: 'none' });
  const value = { activeCustomer, setActiveCustomer };

  return (
    <Router>
      <CustomerContextProvider>
        <div id="theBigFella">
          <ActiveCustomerBar />
          <div id="navbar">
            <div id="navbarlist">
              <div className="navItem activeSelection">
                <Link to="/">
                  <div className="navIcon">
                    <span className="material-icons-outlined">
                      format_list_bulleted
                    </span>
                  </div>
                  <div className="navText">LIST</div>
                </Link>
              </div>
              <div className="navItem">
                <Link to="/active">
                  <div className="navIcon">
                    <span className="material-icons-outlined">handyman</span>
                  </div>
                  <div className="navText">ACTIVE</div>
                </Link>
              </div>
              <div className="navItem">
                <Link to="/stats">
                  <div className="navIcon">
                    <span className="material-icons-outlined">assessment</span>
                  </div>
                  <div className="navText">STATS</div>
                </Link>
              </div>
              <div className="navItem">
                <Link to="/settings">
                  <div className="navIcon">
                    <span className="material-icons-outlined">settings</span>
                  </div>
                  <div className="navText">SETTINGS</div>
                </Link>
              </div>
            </div>
          </div>
          <div id="content">
            <Routes>
              <Route exact path="/" element={<List />} />

              <Route path="/active" element={<Active />} />

              <Route path="/stats" element={<Stats />} />

              <Route path="/settings" element={<Settings />} />

              <Route path="/add" element={<Add />} />
            </Routes>
          </div>
        </div>
      </CustomerContextProvider>
    </Router>
  );
}

export default Main;
