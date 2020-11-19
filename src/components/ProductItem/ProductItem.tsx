import React, { FC } from 'react';
import { TProduct } from '../../types/types';
import './ProductItem.styles.css';

type Props = {
  product: TProduct;
};

const ProductItem: FC<Props> = ({ product }) => {
  const { title, price, description, image } = product;

  return (
    <div className='product-card'>
      <div
        className='product-img'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='product-details'>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
