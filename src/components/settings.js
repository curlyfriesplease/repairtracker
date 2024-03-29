import React, { useState, useContext, useEffect } from 'react';
import { CustomerContext } from '../main';
import '../styles/buttons.css';
import '../styles/settings.css';
import { activeCustomerObject } from './list';
import Login, { LoggedInUser } from './login';
import { Logout } from './login';
import { UserContext } from '../providers/UserProvider';

function Settings() {
  const [customer, setCustomer] = useContext(CustomerContext);
  const user = useContext(UserContext);
  useEffect(() => {
    console.log('Settings: useEffect - user changed');
  }, [user]);
  // TODO: Make logout thing re-render on logout
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

      <div id="loginSettings">
        {user && (
          <div id="loggedIn">
            <LoggedInUser user={user} />
            <Logout user={user} />
          </div>
        )}
        {!user && <Login />}
      </div>
    </div>
  );
}

export default Settings;
