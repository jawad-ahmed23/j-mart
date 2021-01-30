import React from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card/Card.component";
import useStyles from "./CardList.styles";
import { useSelector } from "react-redux";

export default function CardList(props) {
  const products = useSelector((state) => state.products);
  const { title } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography
        className={classes.title}
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
      >
        {title}
      </Typography>
      <div className={classes.line}></div> */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} md={3} key={product.id}>
            <Card product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
