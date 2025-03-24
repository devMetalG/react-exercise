import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './intro/Boolean'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App value={ 9 }/> */}
    <App/>
  </StrictMode>,
)
