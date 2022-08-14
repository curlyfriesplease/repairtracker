import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

import jQuery from 'jquery';
import $ from 'jquery';

import { initApp } from './auth/auth_google.js';

ReactDOM.render(<Main />, document.getElementById('root'));

// Highlight the currently active Navbar item
// TODO: Move this within one of the files. When I had it in main.js I couldn't get it to work,
// maybe because the DOM content didn't exist at the time in loaded? not sure
$('.navItem').on('click', function () {
  $('.navItem.activeSelection').removeClass('activeSelection');
  $(this).addClass('activeSelection');
});

window.onload = function () {
  initApp();
};
