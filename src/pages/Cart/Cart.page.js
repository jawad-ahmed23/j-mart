import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid, Typography } from "@material-ui/core";
import {
  CartItems,
  //  OrderSummary
} from "../../components";
import useStyles from "./Cart.styles";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cart/cart.utils";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const classes = useStyles();

  const total = getTotalPrice(cartItems);

  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length ? (
        <>
          <Button
            className={classes.clearBtn}
            color="primary"
            // onClick={clearItems}
          >
            Clear All Items
          </Button>

          <Grid container justify="space-between">
            <Grid item xs={12} sm={8}>
              {/* Cart Items */}
              <CartItems isCartPage />
              <Typography align="right" variant="h5">
                Total: ${total}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <OrderSummary isCartPage /> */}
            </Grid>
          </Grid>

          <div style={{ marginTop: "20px" }}>
            <Link className={classes.btn} to="/">
              <Button
                classes={{ root: classes.btn }}
                variant="contained"
                color="secondary"
              >
                Continue Shopping
              </Button>
            </Link>
            <Link to="/checkout">
              <Button
                classes={{ root: classes.btn }}
                style={{ marginLeft: "10px" }}
                variant="contained"
                color="primary"
              >
                Checkout
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className={classes.emtyText}>Cart is empty</h1>
          <Link className={classes.btn} to="/">
            <Button
              classes={{ root: classes.btn }}
              variant="contained"
              color="primary"
            >
              Continue Shopping
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
}
