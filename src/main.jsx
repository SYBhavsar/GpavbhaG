import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserPreferencesProvider } from './context/UserPreferencesContext'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserPreferencesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserPreferencesProvider>
  </StrictMode>,
)
