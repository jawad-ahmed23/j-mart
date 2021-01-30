import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./CartQtyButton.styles";
import { useDispatch } from "react-redux";
import { cartActionsTypes } from "../../../../redux/cart/cart.actions";

const { INCREMENT, DECREMENT_AND_DELETE } = cartActionsTypes;

const CartButton = ({ cartItem }) => {
  console.log(cartItem);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item sm={12}>
        <button
          onClick={() =>
            dispatch({ type: DECREMENT_AND_DELETE, payload: cartItem })
          }
          className={classes.cartBtn}
        >
          -
        </button>
        {cartItem.quantity ? cartItem.quantity : 1}
        <button
          onClick={() => dispatch({ type: INCREMENT, payload: cartItem })}
          className={classes.cartBtn}
        >
          +
        </button>
      </Grid>
    </Grid>
  );
};

export default CartButton;
