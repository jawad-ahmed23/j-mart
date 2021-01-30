import React from "react";
import { Typography, TextField, Grid, Paper, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./PaymentForm.styles";

const PaymentForm = ({ cvc, cardName, cardNumber, onChange }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="body1" gutterBottom>
        Payment Information
      </Typography>
      <Typography className={classes.infoText} variant="subtitle2">
        This is a secure 128-bit SSL encrypted payment handled and processed by
        Stripe.com.
      </Typography>
      <Paper className={classes.paper}>
        <div style={{ padding: "20px" }}>
          <TextField
            variant="outlined"
            margin="dense"
            label="Name on Card"
            name="cardName"
            value={cardName}
            onChange={onChange}
            fullWidth
            required
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="dense"
                label="Credit Card Number"
                name="cardNumber"
                value={cardNumber}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="dense"
                label="CVC Code"
                name="cvc"
                value={cvc}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
              type="submit"
              disableRipple
              disabled={cartItems.length ? false : true}
              fullWidth
            >
              Place Order
            </Button>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default PaymentForm;
