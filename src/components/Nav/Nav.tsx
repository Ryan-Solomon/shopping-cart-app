import React from 'react';
import './Nav.styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/products'>
          <li>Products</li>
        </Link>
        <Link to='/cart'>
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
