import React from 'react';
import { useAppContext } from '../../context/AppContext';
import CartItem from './../CartItem/CartItem';

const CartItems = () => {
  const { cart } = useAppContext();

  return (
    <main className='cart-container'>
      {cart.items.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
    </main>
  );
};

export default CartItems;
