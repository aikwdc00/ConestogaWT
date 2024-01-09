import React from 'react'
import { NavLink } from "react-router-dom";

import classes from './Header.module.css';

const navs = [
  {
    path: '/',
    name: 'Conestoga Restaurant',
  },
  {
    path: '/about',
    name: 'About',
  },
]

function Nav() {

  const renderNavs = navs.map((nav, index) => <NavLink to={nav.path} key={index}>{index === 0 ? <h1>{nav.name}</h1> : nav.name}</NavLink>)

  return (
    <div className={classes.Nav}>
      {renderNavs}
      {/* <NavLink to="/">
        <h1>Conestoga Restaurant</h1>
      </NavLink>

      <NavLink to="/about">About</NavLink> */}
    </div>
  )
}

export default Nav
