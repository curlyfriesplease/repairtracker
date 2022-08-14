import React, { useState, useContext, useEffect } from 'react';
import { CustomerContext } from '../main';
import '../styles/footer.css';

// Stopwatch code taken from w3collective.com tutorial
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const startClick = () => {
    console.log('Starting clock ✔️ ⏰');
    setRunning(true);
  };

  const stopClick = () => {
    console.log('Stopping clock ❌ ⏰');
    setRunning(false);
  };
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="clockButton" onClick={() => startClick()}>
        <span className="material-icons-outlined activeClockButton">
          play_arrow
        </span>
      </div>
      <div className="clockButton" onClick={() => stopClick()}>
        <span className="material-icons-outlined">stop</span>
      </div>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

function ActiveCustomerBar() {
  const [customer] = useContext(CustomerContext);
  return (
    <div className="footer">
      <div id="name_and_id">
        <h4>ID: {customer.id}</h4>
        <h4>Name: {customer.customer}</h4>
      </div>
      <div id="descriptions">
        <h4>Item: {customer.itemDesc}</h4>
        <h4>Work: {customer.workDesc}</h4>
      </div>

      <Stopwatch />
    </div>
  );
}

export default ActiveCustomerBar;
