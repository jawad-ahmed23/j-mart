import { productsActionTypes } from "./products.actions";

const { GET_ALL_PRODUCTS } = productsActionTypes;

const productsReducer = (products = [], action = {}) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;
    default: {
      return products;
    }
  }
};

export default productsReducer;
