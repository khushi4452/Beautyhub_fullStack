import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from "./views/Home/Home"
import ShowProduct from './views/ShowProduct/ShowProduct';

import AddProduct from "./views/Addproduct/Addproduct"
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";


const router = createBrowserRouter([{
  path: '/',
  element:<Home/>
},

{
  path: '/addproduct',
  element :<AddProduct/> 
},
{
  path: '/showproduct',
  element :<ShowProduct/> 
},
{
  path: '/updateproduct/:id',
  element :<UpdateProduct/>
},

{
  path: '/signup',
  element: <Signup />
},
{
  path: '/login',
  element: <Login/>
},


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);