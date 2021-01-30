import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cartPage: {
    width: "600px",
    margin: "0 auto",
  },
  productsOverview: {
    padding: theme.spacing(3),
    border: "1px solid #EEEEF0",
    flexDirection: "column",
    overflow: "auto",
    maxHeight: "400px",
  },
}));
