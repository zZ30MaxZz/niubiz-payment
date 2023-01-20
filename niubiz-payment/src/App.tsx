import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NiubizComponent } from './components/NiubizComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NiubizComponent />
      </header>
    </div>
  );
}

export default App;
