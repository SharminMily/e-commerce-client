import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import Home from './components/page/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ProductDetails from './components/page/ProductDetails.jsx';
import Product from './components/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/category')
      },
      {
        path: '/product',
        element: <Product></Product>,
        // loader: () => fetch('http://localhost:5000/category')
        
      },
      {
        path: '/productDetails',
        element: <ProductDetails></ProductDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
