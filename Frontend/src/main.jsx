import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './app/store.js';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from '../appsetting.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={Store}>
          <Toaster position='top-center' reverseOrder={true}/>
          <App />
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  </BrowserRouter>
)
