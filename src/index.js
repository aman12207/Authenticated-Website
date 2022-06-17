import React from 'react'
import './index.css'
import App from './App'
import { AppProvider } from './context/context'
import { BrowserRouter as Router } from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <Auth0Provider
      domain='dev-lnr2y6hv.us.auth0.com'
      clientId='ooQDD1Qq1dCjKQkZahc1HXYcmR6z0cOa'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
  >
    <AppProvider>
      <Router>
      <App />
      </Router>
    </AppProvider>
  </Auth0Provider>
</React.StrictMode>);