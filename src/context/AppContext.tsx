import React, { FC, ReactNode, useContext, useReducer } from 'react';

import { TInitialContext, TProduct } from '../types/types';
import { useFetchProducts } from './../hooks/useFetchProducts';
import { cartReducer, initialState } from './cartReducer';

const initialContext: TInitialContext = {
  products: [],
  status: 'idle',
  cart: {
    items: [],
    itemCount: 0,
    totalPrice: 0,
  },
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
};

const AppContext = React.createContext<TInitialContext>(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  console.log(cart);

  const { products, status } = useFetchProducts(
    'https://fakestoreapi.com/products?limit=20'
  );

  const addToCart = (item: TProduct) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };
  const removeFromCart = (item: TProduct) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item,
    });
  };
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <AppContext.Provider
      value={{
        products,
        status,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
