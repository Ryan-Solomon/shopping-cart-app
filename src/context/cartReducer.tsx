import { TCart, TAction, TProduct } from '../types/types';

export const initialState: TCart = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
};

export function cartReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        items: [...state.items, action.payload],
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
    case 'SELECT_NUMBER_OF_ITEMS':
      const newItem = {
        ...action.payload.item,
        count: action.payload.quantity,
      };

      const newItemCount = state.items.reduce(
        (acc: number, currItem: TProduct) => {
          if (currItem.id === action.payload.item.id) {
            return acc;
          } else {
            return acc + currItem.count;
          }
        },
        action.payload.quantity
      );

      const newTotalPrice = state.items.reduce(
        (runningPrice: number, item: TProduct) => {
          if (item.id === action.payload.item.id) {
            return runningPrice;
          } else {
            return runningPrice + item.price;
          }
        },
        action.payload.item.price * action.payload.quantity
      );

      return {
        items: [...state.items, newItem],
        itemCount: newItemCount,
        totalPrice: newTotalPrice,
      };
    default:
      return { ...state };
  }
}
