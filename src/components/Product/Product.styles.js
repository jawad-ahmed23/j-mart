import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  productRoot: {
    marginTop: theme.spacing(10),
    width: "1190px",
    margin: "0 auto",
  },
  paper: {
    padding: "10px 0px",
  },
  productDetail: {
    paddingLeft: theme.spacing(3),
  },
  btnGroup: {
    marginTop: theme.spacing(3),
  },
  productRating: {
    width: "300px",
    marginBottom: "auto",
  },
  ratingText: {
    color: "#61B9EC",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  productPrice: {
    margin: `${theme.spacing(5)}px 0px`,
  },
}));
