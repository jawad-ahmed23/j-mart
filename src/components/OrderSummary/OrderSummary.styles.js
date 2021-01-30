import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "400px",
  },
  heading: {
    fontWeight: "400",
    textShadow: `1px 1px 1px #000`,
    fontSize: theme.spacing(3),
  },
  searchBtn: {
    borderRadius: 0,
    padding: "8.5px 0px",
    width: theme.spacing(10),
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
  },
  searchInput: {
    position: "relative",
    height: "100%",
    width: "100%",
    padding: "10.5px 12px",
    boxShadow: "1px 1px 3px #aaa",
    border: ".5px solid #D4E3EB",
    fontSize: theme.spacing(2),
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    "&:focus": {
      outline: "none",
    },
  },
  couponSection: {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #EEEEF0",
    flexDirection: "column",
  },

  priceSection: {
    padding: theme.spacing(3),
    border: "1px solid #EEEEF0",
    flexDirection: "column",
  },
}));
