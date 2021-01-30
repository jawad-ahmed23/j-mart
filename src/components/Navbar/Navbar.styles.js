import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
    borderRadius: 0,
    boxShadow: "1px 1px 3px #aaa",
    border: ".5px solid #D4E3EB",
    fontSize: theme.spacing(2),
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    "&:focus": {
      outline: "none",
    },
  },
  icon: {
    color: "#000",
  },
}));
