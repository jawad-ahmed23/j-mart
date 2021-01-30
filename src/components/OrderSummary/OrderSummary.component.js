import React, { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./OrderSummary.styles";
import { CartItems } from "..";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cart/cart.utils";

const OrderSummary = () => {
  const [productTax] = useState(20);
  const [productShppingCost] = useState(20);
  const cartItems = useSelector((state) => state.cartItems);
  const classes = useStyles();

  const subTotal = getTotalPrice(cartItems);

  const grandTotal = subTotal + productTax + productShppingCost;

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography className={classes.heading} variant="body1" gutterBottom>
          Order Summary
        </Typography>
      </div>

      {/* Cart Items */}
      <CartItems />

      <div className={classes.couponSection}>
        <Typography variant="subtitl2" gutterBottom>
          Apply Coupon Code
        </Typography>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            <input className={classes.searchInput} />
          </Grid>
          <Grid item>
            <Button
              className={classes.searchBtn}
              variant="contained"
              color="primary"
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className={classes.priceSection}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="body1">Tax</Typography>
            <Typography variant="body1">Shipping</Typography>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">${subTotal}</Typography>
            <Typography variant="body1">${productTax}</Typography>
            <Typography variant="body1">${productShppingCost}</Typography>
            <Typography variant="h6">${grandTotal}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OrderSummary;
