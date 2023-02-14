import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser); //GIVES US USER

  return (
    // BEM naming convention (change 'App' to 'app')
    <div className="app">
      {user? (
        <>
          <Sidebar />
          <Chat />
        </>
        
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
