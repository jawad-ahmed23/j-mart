import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import useStyles from "./CartItems.styles";
import CartItem from "./CartItem/CartItem.component";

const CartItems = ({ isCartPage }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const classes = useStyles();
  return (
    <div
      className={`${
        isCartPage ? `${classes.cartPage}` : `${classes.productsOverview}`
      }`}
    >
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem
            isCartPage={isCartPage}
            cartItem={cartItem}
            key={cartItem.id}
          />
        ))
      ) : (
        <Typography align="center">No Item to Show</Typography>
      )}
    </div>
  );
};

export default CartItems;
