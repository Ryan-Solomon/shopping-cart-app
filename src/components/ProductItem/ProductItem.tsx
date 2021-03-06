import React, { FC } from 'react';
import { useAppContext } from '../../context/AppContext';
import { TProduct } from '../../types/types';
import './ProductItem.styles.css';

type Props = {
  product: TProduct;
};

const ProductItem: FC<Props> = ({ product }) => {
  const { title, price, description, image } = product;
  const { addToCart } = useAppContext();

  return (
    <div className='product-card'>
      <div
        className='product-img'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='product-details'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='add-to-cart'>
          <h4>${price}</h4>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
