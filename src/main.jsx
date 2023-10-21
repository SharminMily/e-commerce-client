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
import AddProduct from './components/page/AddProduct.jsx';

import AuthProvider from './components/Provider/AuthProvider.jsx';
import SingUp from './components/Provider/singup.jsx';
import SingIn from './components/Provider/Singin.jsx';
import AddCard from './components/page/addCard.jsx';
import MyCart from './components/page/MyCart.jsx';
import UpdateProduct from './components/page/UpdateProduct.jsx';
import PrivateRouter from './components/Provider/PrivateRouter.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/product',
        element: <Product></Product>,
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,

      },
      {
        path: '/addCard',
        element: <AddCard></AddCard>,

      },
      {
        path: '/myCart/:id',
        element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
        loader: ({ params }) => fetch(`https://e-commerce-server-bbmemffin-sharminmily.vercel.app/allData/${params.id}`)

      },

      {
        path: '/productDetails',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://e-commerce-server-bbmemffin-sharminmily.vercel.app/allData/${params.id}`)
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/singIn',
        element: <SingIn></SingIn>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
