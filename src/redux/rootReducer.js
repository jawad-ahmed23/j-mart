import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";

export default combineReducers({
  cartItems: cartReducer,
  products: productsReducer,
});
