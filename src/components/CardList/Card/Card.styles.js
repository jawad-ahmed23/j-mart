import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    //maxWidth: "100%",
    //maxWidth: 345,
    boxShadow: "1px 1px px",
    borderRadius: 0,
  },
  productImg: {
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  btn: {
    borderRadius: 0,
  },
  cardActionsRoot: {
    marginTop: "auto",
    height: "100%",
  },
  cardContent: {
    padding: theme.spacing(1),
  },
}));
