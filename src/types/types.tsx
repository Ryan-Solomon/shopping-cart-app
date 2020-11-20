export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count: number;
};

export type TInitialContext = {
  products: TProduct[];
  status: 'idle' | 'loading' | 'error';
  cart: TCart;
  addToCart: (item: TProduct) => void;
  removeFromCart: (item: TProduct) => void;
  clearCart: () => void;
  selectNumberOfItems: (item: TProduct, quantity: number) => void;
};

export type TCart = {
  items: TProduct[];
  itemCount: number;
  totalPrice: number;
};

export type TAction =
  | {
      type: 'ADD_TO_CART';
      payload: TProduct;
    }
  | {
      type: 'REMOVE_FROM_CART';
      payload: TProduct;
    }
  | {
      type: 'CLEAR_CART';
    }
  | {
      type: 'SELECT_NUMBER_OF_ITEMS';
      payload: {
        item: TProduct;
        quantity: number;
      };
    };
