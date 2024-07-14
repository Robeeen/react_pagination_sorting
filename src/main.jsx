import React from 'react'
import ReactDOM from 'react-dom/client'
import Users from './routes/Users.jsx';
import App from './routes/App.jsx';
import Products from './routes/Products.jsx';
import ErrorPage from './error-page.jsx';
import './index.css';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Context from './context/Context.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/users",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
