import React, { useState, useContext } from 'react';
import { CustomerContext } from '../main';
import '../styles/buttons.css';
import { activeCustomerObject } from './list';
import Login, { LoggedInUser } from './login';
import { Logout } from './login';
import { UserContext } from '../providers/UserProvider';

function Settings() {
  const [customer, setCustomer] = useContext(CustomerContext);
  const user = useContext(UserContext);

  return (
    <div>
      <h2>SETTINGS</h2>
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
      <br />
      <br />
      {user && <LoggedInUser user={user} />}
      <br />
      <br />
      {user ? <Logout /> : <Login />}
      <br />
      <br />
    </div>
  );
}

export default Settings;
