import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./DeliveryOptions.styles";

const DeliveryOptions = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Delivery Options
      </Typography>
      <Typography variant="subtitle1">Address:</Typography>
      <Typography variant="h6" gutterBottom>
        Lahore, Pakistan
      </Typography>

      <Grid container>
        <Grid item sm={9}>
          <Typography variant="h6">Home Delivery</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Enjoy free shipping promotion with minimum 10 items.
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography align="right" variant="h6">
            Rs. 60
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Cash on Delivery Available</Typography>
      </div>
    </div>
  );
};

export default DeliveryOptions;
