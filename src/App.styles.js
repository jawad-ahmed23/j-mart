import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#5295CB",
      main: "#3F88C5",
      darK: "#3881BC",
    },
    secondary: {
      light: "#F9CE4D",
      main: "#F9CB40",
      dark: "#F8BE12",
    },
  },
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});
