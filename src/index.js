import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
   <ThemeProvider dir='rtl'>
     <App />
   </ThemeProvider>

);