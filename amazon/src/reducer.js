import { ADD_TO_CART } from './actions';

const INITIAL_STATE = {
  products: [
    {id: 'abc123', name: 'toothbrush', price: 2},
    {id: 'def456', name: 'banana', price: 10},
    {id: 'ghi789', name: 'car', price: 1},
    {id: 'abc456', name: 'laptop', price: 100},
    {id: 'def123', name: 'dignity', price: 9001},
  ],
  items: [
    {id: 'def123', name: 'dignity', price: 9001, quantity: 2},
  ],
  price: 9001 * 2,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const items = [...state.items];
      const oldItem = items.find((item) => item.id === action.product.id);

      const newPrice = state.price + (action.product.price * action.quantity);

      if (oldItem) {
        oldItem.quantity += action.quantity;
        return {...state, items, price: newPrice};
      } else {
        const newItem = {...action.product, quantity: action.quantity};

        return {...state, items: [newItem, ...items], price: newPrice};
      }
    }
    default:
      return state;
  }
}

export default reducer;
