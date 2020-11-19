import React, { FC } from 'react';
import { TProduct } from '../../types/types';

type Props = {
  product: TProduct;
};

const ProductItem: FC<Props> = ({ product }) => {
  const { title, price, description, category, image } = product;

  return (
    <div className='product-card'>
      <img style={{ width: '100px' }} src={image} alt={title} />
      <div className='product-details'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className='price-and-category'>
        <h4>{price}</h4>
        <h4>{category}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
