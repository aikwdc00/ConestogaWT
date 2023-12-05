import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CartProvider from './store/CartProvider';

import Root from './components/Root';
import Meals from './components/Meals/Meals';
import About from './components/About';
import CoverPage from './components/CoverPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          path: "/",
          element: <Meals />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cover",
          element: <CoverPage />,
        },
      ]
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
