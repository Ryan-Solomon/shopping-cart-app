import { TCart, TAction } from '../types/types';

export const initialState: TCart = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
};

export function cartReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        } else {
          return { ...item, count: item.count };
        }
      });

      return {
        items:
          newItems.length > 0 ? newItems : [{ ...action.payload, count: 1 }],
        itemCount: state.itemCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case 'REMOVE_FROM_CART':
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
        itemCount: state.itemCount - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    case 'CLEAR_CART':
      return {
        items: [],
        itemCount: 0,
        totalPrice: 0,
      };
    default:
      return { ...state };
  }
}
