import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom'
import { LoadScript } from '@react-google-maps/api';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
          <LoadScript googleMapsApiKey="AIzaSyBXMCIrIIiDsN4Y00G-2Kx3uiZCUMplatU">
        <Provider store={store}>
            <App />
        </Provider>
        </LoadScript>
    </BrowserRouter>
)
