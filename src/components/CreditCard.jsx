import React from 'react';

function censorCreditCard(number) {
  return `**** **** **** ${number.substring(15, 20)}`;
}

function CreditCard({ type, number, expMonth, expYear, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <strong>{type}</strong>
      <br />
      <strong>{censorCreditCard(number)}</strong>
      <br />
      <small>
        Expiration: {expMonth} / {expYear}
      </small>
    </div>
  );
}

export default CreditCard;
