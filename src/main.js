import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import jQuery from 'jquery';
import $ from 'jquery';

import List from './components/list';
import Active from './components/active';
import Stats from './components/stats';
import Settings from './components/settings';

import './styles/main.css';
import './styles/sidebar.css';

class Main extends Component {
  highlightActiveNavbarSelection() {
    console.log('navbar item clicked');
  }

  render() {
    return (
      <Router>
        <div id="theBigFella">
          <div id="navbar">
            <div id="navbarlist">
              <div
                className="navItem activeSelection"
                onClick={this.highlightActiveNavbarSelection}
              >
                <Link to="/">
                  <div className="navIcon">
                    <span className="material-icons-outlined">
                      format_list_bulleted
                    </span>
                  </div>
                  <div className="navText">LIST</div>
                </Link>
              </div>
              <div
                className="navItem"
                onClick={this.highlightActiveNavbarSelection}
              >
                <Link to="/active">
                  <div className="navIcon">
                    <span className="material-icons-outlined">handyman</span>
                  </div>
                  <div className="navText">ACTIVE</div>
                </Link>
              </div>
              <div
                className="navItem"
                onClick={this.highlightActiveNavbarSelection}
              >
                <Link to="/stats">
                  <div className="navIcon">
                    <span className="material-icons-outlined">assessment</span>
                  </div>
                  <div className="navText">STATS</div>
                </Link>
              </div>
              <div
                className="navItem"
                onClick={this.highlightActiveNavbarSelection}
              >
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
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
