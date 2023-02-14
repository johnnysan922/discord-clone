import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase'
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); //GIVES US USER

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {   //LISTENER; anytime user logs in it will get the user
      // console.log("user is ", authUser);     //TESTING
      if(authUser){
        //USER IS LOGGED IN
        dispatch(
          login({      //dispatch() shoots information into data layer
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      }
      else{
        //USER IS LOGGED OUT
        dispatch(logout());
      }
    })
  }, [dispatch]);  // '[]' prevents useEffect from looping infinitly

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
