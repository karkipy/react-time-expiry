import React from 'react';
import './SessionAlert.css';
import SessionAlertModal from './SessionAlertModal';

const Session = ({ time, onClickOk, onCancel, Message }) => (
  <div>
    <div className="modal-backdrop" />
    <SessionAlertModal
      time={time}
      onClickOk={onClickOk}
      onClickCancel={onCancel}
      Message={Message}
    />
  </div>
);

export default Session;
