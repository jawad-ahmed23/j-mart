import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./CheckoutForm.styles";
import AddressForm from "../AddressForm/AddressForm.component";
import PaymentForm from "../PaymentForm/PaymentForm.component";
import OrderSummary from "../../OrderSummary/OrderSummary.component";

const CheckoutForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    isAddressBilling: false,
    cvc: "",
    cardName: "",
    cardNumber: "",
  });

  const {
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zipCode,
    isAddressBilling,
    cvc,
    cardName,
    cardNumber,
  } = userInfo;

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  console.log(userInfo);
  return (
    <div className={classes.root}>
      <Grid container justify="space-around">
        <Grid item xs={12} sm={5}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <AddressForm
              firstName={firstName}
              lastName={lastName}
              email={email}
              address={address}
              city={city}
              state={state}
              zipCode={zipCode}
              isAddressBilling={isAddressBilling}
              onChange={handleInput}
            />
            <PaymentForm
              cvc={cvc}
              cardName={cardName}
              cardNumber={cardNumber}
              onChange={handleInput}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={4}>
          <OrderSummary />
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutForm;
