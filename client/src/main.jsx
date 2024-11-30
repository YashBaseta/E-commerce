import { Toaster } from './components/ui/toaster.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthLayout from './components/auth/layout.jsx'
import { inject } from '@vercel/analytics';
inject();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <App/>

  <Toaster/></Provider>
  </BrowserRouter>
  
)
