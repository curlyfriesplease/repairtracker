import React, { Component, useState, useContext } from 'react';
import { CustomerContext } from '../main';

import { activeCustomerObject } from './list';

function Active() {
  const [customer, setCustomer] = useContext(CustomerContext);

  return (
    <div>
      <h2>ACTIVE</h2>
      <p>This is the page for the active job</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
    </div>
  );
}

export default Active;
