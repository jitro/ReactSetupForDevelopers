import React from 'react';
import '../styles/Greeting.scss';

const greeting = 'React + Redux + RxJS = Productivity';

export default function Greeting() {
  return (
    <div className="greeting">
      <h1>{greeting}</h1>
    </div>
  );
}
