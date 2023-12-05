import React, { useState } from 'react'
import { Outlet } from "react-router-dom";

import Cart from '../Cart/Cart';
import Header from '../Layout/Header';

function Root() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
