import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//import './index.css'

import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>   
     <App />
  </BrowserRouter >
);