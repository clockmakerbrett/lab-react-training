import React from 'react';

function Greeting(props) {
  const { lang } = props;
  let greeting;
  switch (lang) {
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    default:
      greeting = 'Hello';
  }
  return (
    <div className="greeting-container">
      <h1>
        {greeting}, {props.children}.
      </h1>
    </div>
  );
}

export default Greeting;
