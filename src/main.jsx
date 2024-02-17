import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <MainPage>
    <App />
    </MainPage>
  </React.StrictMode>
  </BrowserRouter>
)
