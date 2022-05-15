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

import './styles/main.css';
import './styles/sidebar.css';

const UserContext = React.createContext(null);

// Compo to show the currently active customer
function ActiveCustomerBar() {
  const customer = useContext(UserContext);
  return <h1>Customer id: {customer.id}</h1>;
}

function Main(props) {
  const [activeCustomer, setActiveCustomer] = useState({ id: 'none' });
  const value = useMemo(
    () => ({ activeCustomer, setActiveCustomer }),
    [activeCustomer]
  );
  return (
    <Router>
      <UserContext.Provider value={value}>
        <ActiveCustomerBar />
        <div id="theBigFella">
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
      </UserContext.Provider>
    </Router>
  );
}

export default Main;
