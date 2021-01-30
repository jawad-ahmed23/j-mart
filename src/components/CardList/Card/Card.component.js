import React from "react";
import { Link } from "react-router-dom";
import {
  Card as MuiCard,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import { cartActionsTypes } from "../../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

import useStyles from "./Card.styles";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const { ADD_TO_CART } = cartActionsTypes;

export default function Card({ product }) {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;
  const classes = useStyles();
  return (
    <MuiCard className={classes.root}>
      <Link to={`/product/${product.id}`}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={classes.productImg}
        ></div>
      </Link>
      <IconButton>
        <FavoriteBorderOutlinedIcon className={classes.icon} fontSize="large" />
      </IconButton>
      <IconButton>
        <ShareOutlinedIcon className={classes.icon} />
      </IconButton>
      <div className={classes.cardContent}>
        {/* <Typography gutterBottom variant="h6" component="p">
            {name.toUpperCase()}
          </Typography> */}
        <Typography variant="body2" color="textSecondary">
          {product?.description}
        </Typography>
        <Grid container justify="space-between">
          <Grid item sm={8}>
            <Typography variant="h6">{name}</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography color="primary" align="right" gutterBottom variant="h6">
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.cardActionsRoot}>
        <Button
          className={classes.btn}
          size="medium"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
        >
          ADD TO CART
        </Button>
      </div>
    </MuiCard>
  );
}
