import React, { useEffect } from "react";
import { Home, Cart, Checkout, ProductDetail } from "./pages";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import theme from "./App.styles";
import { useDispatch } from "react-redux";
import { productsActionTypes } from "./redux/products/products.actions";
import products from "./data/products.data";

function App() {
  const dispatch = useDispatch();

  const { GET_ALL_PRODUCTS } = productsActionTypes;

  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, payload: products });
  }, [GET_ALL_PRODUCTS, dispatch]);

  document.title = "J - Mart Shop Great Products";

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>

        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
