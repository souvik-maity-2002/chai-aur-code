import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chai from './Chai.jsx'
import App from './App.jsx'

const reactElement= React.createElement(
  'a',
  {href:'https://youtube.com', target:'_blank'},
  'Chai-aur-code'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
    <App/>
    <Chai/>
  </StrictMode>,
)
