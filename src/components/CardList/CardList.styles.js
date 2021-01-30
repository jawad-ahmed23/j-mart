import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "1190px",
    flexGrow: 1,
    margin: "0 auto",
    marginTop: theme.spacing(13),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "0px 0px 0px",
  },
  title: {
    textTransform: "uppercase",
  },
  line: {
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    paddingBottom: "0px",
    width: "100px",
    margin: "30px auto",
  },
}));
