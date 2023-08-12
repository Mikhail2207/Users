import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './css/main.css'

import { App } from './App'

const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<App />)
