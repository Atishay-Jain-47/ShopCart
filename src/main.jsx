import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/Store'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
  </BrowserRouter>

)
