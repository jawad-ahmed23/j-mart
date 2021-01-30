import { cartActionsTypes } from "./cart.actions";
import {
  addItemToCart,
  increaseItemQty,
  decreaseQty,
  deleteItem,
} from "./cart.utils";

const {
  ADD_TO_CART,
  INCREMENT,
  DECREMENT_AND_DELETE,
  DELETE_ITEM,
  CLEAR_CART_ITEMS,
} = cartActionsTypes;

const cartReducer = (cartItems = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return addItemToCart(cartItems, action.payload);
    }
    case INCREMENT: {
      return increaseItemQty(cartItems, action.payload);
    }
    case DECREMENT_AND_DELETE: {
      return decreaseQty(cartItems, action.payload);
    }
    case DELETE_ITEM: {
      return deleteItem(cartItems, action.payload);
    }
    case CLEAR_CART_ITEMS: {
      return (cartItems = []);
    }
    default: {
      return cartItems;
    }
  }
};

export default cartReducer;
