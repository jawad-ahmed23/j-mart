import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import Typography from "@material-ui/core/Typography";
// import useStyles from "./CartItem.styles";
import CartQtyButtons from "./CartButton/CartQtyButtons.component";
import { useDispatch } from "react-redux";
import { cartActionsTypes } from "../../../redux/cart/cart.actions";

const {
  // ADD_TO_CART,
  // GET_TOTAL_PRICE,
  DELETE_ITEM,
  // CLEAR_CART_ITEMS,
} = cartActionsTypes;

const CartItem = ({ cartItem, isCartPage }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  return (
    <Grid justify="space-between" container spacing={1} alignItems="center">
      <Grid item sm={`${isCartPage ? 3 : 4}`}>
        <div>
          <img src={cartItem.imageUrl} alt="product-img" width="100px" />
        </div>
      </Grid>
      <Grid item sm={`${isCartPage ? 3 : 4}`}>
        <Typography variant="body1" component="h6" gutterBottom>
          {cartItem.name}
        </Typography>
        {/* Increment Decrement Buttons */}

        <CartQtyButtons cartItem={cartItem} />
      </Grid>
      <Grid item sm={2}>
        <Typography variant="body1">x ${cartItem.price}</Typography>
      </Grid>
      <Grid item sm={2}>
        <IconButton
          onClick={() => dispatch({ type: DELETE_ITEM, payload: cartItem })}
        >
          <HighlightOffOutlinedIcon />
        </IconButton>
      </Grid>
      {isCartPage && (
        <Grid item sm={2}>
          <Typography variant="h6">
            ${`${cartItem.price * cartItem.quantity}`}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CartItem;
