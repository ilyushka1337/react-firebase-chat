import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirebaseContextProvider } from './firebase'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </React.StrictMode>,
)
