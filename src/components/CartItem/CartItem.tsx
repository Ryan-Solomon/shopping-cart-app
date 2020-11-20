import React, { FC } from 'react';
import { TProduct } from '../../types/types';

type Props = {
  cartItem: TProduct;
};

const CartItem: FC<Props> = ({ cartItem }) => {
  return <div>{cartItem.title}</div>;
};

export default CartItem;
