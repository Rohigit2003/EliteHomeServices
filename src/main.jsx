import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EliteHomeServices from './EliteHomeServices'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EliteHomeServices />
  </StrictMode>,
)
