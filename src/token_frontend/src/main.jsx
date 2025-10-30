import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import './assets/styles.css'
import { AuthClient } from '@dfinity/auth-client';
import { BrowserRouter } from 'react-router-dom';

// const init = async ()=> {
    
  // const authClient = await AuthClient.create();

  // if (await authClient.isAuthenticated()) {
  //   handleAuthenticate(authClient);
  // } else {
  //     await authClient.login({
  //     identityProvider: "https://identity.ic0.app/#authorize",

  //     onSuccess: () => {
  //       handleAuthenticate(authClient);
  //       }
  //     });
  //   }
  // }

  


// async function handleAuthenticate(authClient) {}
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>);


// init();

// }
