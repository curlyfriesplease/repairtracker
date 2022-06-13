import React, { Component, useState, useContext } from 'react';
import { convertMinutesToHours } from '../helper/time';
import { CustomerContext } from '../main';
import '../styles/active.css';

function Active() {
  const [customer, setCustomer] = useContext(CustomerContext);
  return (
    <div>
      <h2>ACTIVE</h2>
      <br />
      <div id="jobDetailsBlock">
        <div className="detailRow">
          <p className="detailLabel">ID:</p>
          <p className="detailData">{customer.id}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Flag:</p>
          <p className="detailData">
            {customer.flag ? `${customer.flag}` : 'none'}
          </p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Customer name:</p>
          <p className="detailData">{customer.customer}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Customer email:</p>
          <p className="detailData">{customer.email}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Item:</p>
          <p className="detailData">{customer.itemDesc}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Work:</p>
          <p className="detailData">{customer.workDesc}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Quoted price:</p>
          <p className="detailData">£{customer.quotedPrice}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Time estimate:</p>
          <p className="detailData">
            {convertMinutesToHours(customer.timeEstimate)}
          </p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Time logged:</p>
          <p
            className={`detailData ${
              customer.timeLogged > customer.timeEstimate ? 'redText' : ''
            }`}
          >
            {convertMinutesToHours(customer.timeLogged)}
          </p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Costs:</p>
          <p className="detailData">£{customer.costs}</p>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Notes:</p>
          <textarea className="detailData" id="customerNotesField">
            {customer.notes}
          </textarea>
        </div>
        <div className="detailRow">
          <p className="detailLabel">Log:</p>
          <div className="detailData" id="logDataList">
            <ul>
              {customer.log?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Active;
