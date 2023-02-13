import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'

function App() {
  return (
    // BEM naming convention (change 'App' to 'app')
    <div className="app">
      <h1>LETS BUILD A DISCORD CLONE</h1>

      {/* SIDEBAR COMPONENT*/}
      <Sidebar />

      {/* CHAT COMPONENT*/}
      
    </div>
  );
}

export default App;
