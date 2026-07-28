import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SoundProvider } from './context/SoundContext.jsx'
import { ProfileProvider } from './context/ProfileContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SoundProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </SoundProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
