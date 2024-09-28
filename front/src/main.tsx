import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CharacterProvider } from './provider/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CharacterProvider>
          <App />
      </CharacterProvider>
    </BrowserRouter>
  </StrictMode>,
)
