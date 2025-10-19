import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import '../public/main.css';
import { AuthClient } from '@dfinity/auth-client';


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
      <App />
    </React.StrictMode>);


// init();

// }
