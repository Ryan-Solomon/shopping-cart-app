import React from 'react';
import { useAppContext } from '../../context/AppContext';

const CartItems = () => {
  const { cart } = useAppContext();

  return (
    <main className='cart-container'>
      {cart.items.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
        // Now, need to add a cart item so I can show it on the page
      })}
    </main>
  );
};

export default CartItems;
