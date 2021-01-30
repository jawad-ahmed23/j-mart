import React from "react";
import {
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@material-ui/core";

import useStyles from "./AddressForm.styles";

const AddressForm = ({
  firstName,
  lastName,
  email,
  state,
  address,
  city,
  zipCode,
  isAddressBilling,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="body1" gutterBottom>
        Billing Address
      </Typography>
      <Paper className={classes.paper}>
        <div style={{ padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="dense"
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="dense"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            margin="dense"
            label="Email"
            name="email"
            value={email}
            onChange={onChange}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="dense"
            label="Address"
            name="address"
            value={address}
            onChange={onChange}
            fullWidth
            required
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                margin="dense"
                label="City"
                name="city"
                value={city}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                margin="dense"
                name="state"
                label="State/Province"
                value={state}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                margin="dense"
                label="Zip"
                name="zipCode"
                value={zipCode}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAddressBilling}
                name="isAddressBilling"
                onChange={({ target: { name, checked } }) =>
                  onChange({ target: { name: name, value: checked } })
                }
              />
            }
            label="Use address as billing."
          />
        </div>
      </Paper>
    </div>
  );
};

export default AddressForm;
