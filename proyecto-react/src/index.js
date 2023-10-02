import ReactDOM from 'react-dom/client';
import App from './App'; //ruta relativa
import React from 'react';
import {BrowserRouter} from "react-router-dom"; //envoltura de enrutamiento 
//--> es para englobar todo el sistema de ruteo 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
