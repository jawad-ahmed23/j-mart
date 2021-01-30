import React from "react";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./Product.styles";
//import DeliveryOptions from "./DeliveryOptions/DeliveryOptions.component";
import { useDispatch } from "react-redux";
import { cartActionsTypes } from "../../redux/cart/cart.actions";
import { Link } from "react-router-dom";
// import CartQtyButton from "../CartItems/CartItem/CartButton/CartQtyButtons.component";

const { ADD_TO_CART } = cartActionsTypes;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { description, imageUrl, name, price } = product;

  document.title = name;
  return (
    <div className={classes.productRoot}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid className={classes.productImg} item xs={12} sm={4}>
            <div>
              <img src={imageUrl} alt="product-img" width="100%" />
            </div>
          </Grid>
          <Grid className={classes.productDetail} item xs={12} sm={4}>
            <Typography variant="h4" component="h4" gutterBottom>
              {name}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {description}
            </Typography>

            <Typography
              className={classes.productPrice}
              variant="h4"
              color="primary"
              gutterBottom
            >
              ${price}
            </Typography>

            <div className={classes.productRating}>
              <Grid container justify="space-evenly">
                <Grid item sm={6}>
                  <Rating name="product-rating" value={5} readOnly />
                </Grid>
                <Grid item sm={6}>
                  <Typography
                    className={classes.ratingText}
                    component="span"
                    variant="subtitle2"
                  >
                    0 ratings
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {/* <CartQtyButton cartItem={product} /> */}

            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid item sm={6}>
                <Button
                  onClick={() =>
                    dispatch({
                      type: ADD_TO_CART,
                      payload: product,
                    })
                  }
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Link to="/checkout">
                  <Button
                    onClick={() =>
                      dispatch({ type: ADD_TO_CART, payload: product })
                    }
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Buy Now
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <DeliveryOptions />
          </Grid> */}
        </Grid>
      </Paper>
    </div>
  );
};

export default Product;
