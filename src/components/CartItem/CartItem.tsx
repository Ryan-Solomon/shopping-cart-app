import React, { ChangeEvent, FC } from 'react';
import { useAppContext } from '../../context/AppContext';
import { TProduct } from '../../types/types';
import './CartItem.styles.css';

type Props = {
  cartItem: TProduct;
};

const CartItem: FC<Props> = ({ cartItem }) => {
  const { selectNumberOfItems } = useAppContext();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    selectNumberOfItems(cartItem, parseInt(event.target.value));
  };

  return (
    <div className='cart-item'>
      <img src={cartItem.image} alt={cartItem.title} />
      <div className='item-details'>
        <h2>{cartItem.title}</h2>
        <p>{cartItem.description}</p>
        <select defaultValue='1' onChange={(e) => handleSelect(e)}>
          <option value='0'> Qty: 0 (delete)</option>
          <option value='1'>Qty: {cartItem.count || 1}</option>
          <option value='2'> Qty: 2</option>
          <option value='3'> Qty: 3</option>
          <option value='4'> Qty: 4</option>
          <option value='5'> Qty: 5</option>
          <option value='6'> Qty: 6</option>
          <option value='7'> Qty: 7</option>
          <option value='8'> Qty: 8</option>
          <option value='9'> Qty: 9</option>
        </select>
      </div>
      <div className='price'>
        <h2>${cartItem.price}</h2>
      </div>
    </div>
  );
};

export default CartItem;
