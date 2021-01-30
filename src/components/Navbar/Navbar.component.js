import React from "react";
import useStyles from "./Navbar.styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const classes = useStyles();

  const totalCartItems = cartItems.length;

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} md={7}>
            <Grid container>
              <Grid item>
                <IconButton>
                  <MenuIcon className={classes.icon} />
                </IconButton>
              </Grid>
              <Grid item>
                <Link to="/">
                  <Typography
                    className={classes.branding}
                    color="primary"
                    variant="h4"
                  >
                    J Mart
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <form className={classes.form}>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <input
                    className={classes.searchInput}
                    placeholder="What do want to find?"
                  />
                </Grid>
                <Grid item>
                  <Button
                    className={classes.searchBtn}
                    variant="contained"
                    color="primary"
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item md={2}>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="secondary">
                <NotificationsIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={1} color="secondary">
                <FavoriteIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={totalCartItems} color="secondary">
                <Link to="/cart">
                  <ShoppingCartIcon className={classes.icon} />
                </Link>
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
