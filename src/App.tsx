import React from 'react';
import './App.css';
import WAF from './Modules/WAF/WAF';
import Compute from './Modules/Compute/Compute';
import Containers from './Modules/Containers/Containers';

function App() {
  return (
    <div className="App">
      <h1>AWS Cloud Practitioner Exam Prep</h1>
      <WAF />
      <Compute />
      <Containers />
    </div>
  );
}

export default App;
