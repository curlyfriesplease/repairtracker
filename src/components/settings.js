import React, { useState, useContext } from 'react';
import { CustomerContext } from '../main';
import '../styles/buttons.css';
import { activeCustomerObject } from './list';

// function ContextUpdateTest() {
//   const [customer, setCustomer] = useContext(CustomerContext);
//   console.log('attempting to update React Context with dummy customer');
//   let randomNumber = Math.floor(Math.random() * 100);
//   setCustomer({ id: { randomNumber } });
// }

// function onClickContextUpdate(e) {
//   (e) => setCustomer({ id: Math.floor(Math.random() * 100) })
// }

function Settings() {
  const [customer, setCustomer] = useContext(CustomerContext);
  return (
    <div>
      <h2>SETTINGS</h2>
      <p>Settings list</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
      <br />
      <button
        className="button-85"
        onClick={(e) =>
          setCustomer({
            id: '9999',
            customer: 'Test',
            itemDesc: 'Test item description',
            workDesc: 'Test work description',
            status: 'In Progress',
          })
        }
      >
        Change react context to test object
      </button>
      <br />
      <br />
      <button
        className="button-85"
        onClick={() => window.alert(JSON.stringify(activeCustomerObject))}
      >
        Window alert active customer object
      </button>
    </div>
  );
}

export default Settings;
