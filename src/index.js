import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Journey from './Pages/Journey';
import Management from './Pages/Management';
import OurTeam from './Pages/OurTeam';
import CSR from './Pages/CSR';
import Newsletter from './Pages/Newsletter';
import NriCorner from './Pages/NriCorner';
import Residential from './Pages/Residential';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about-us",
    element: <About/>,
  },
  {
    path: "/our-journey",
    element: <Journey/>,
  },
  {
    path: "/management",
    element: <Management/>,
  },
  {
    path: "/our-team",
    element: <OurTeam/>,
  },
  {
    path: "/csr",
    element: <CSR/>,
  },
  {
    path: "/newsletter",
    element: <Newsletter/>,
  },
  {
    path: "/nri-corner",
    element: <NriCorner/>,
  },
  {
    path: "/residential",
    element: <Residential/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
