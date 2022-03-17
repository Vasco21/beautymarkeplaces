import React from 'react';
import { Grid } from '@material-ui/core';
import Product from "../Product/Product"
import useStyles from "./ProductStyle";
import "../../StyleAll.css";

export default function Products({products , onAddToCart}) {
    const classes = useStyles();
  
    if (!products.length) return <p>Loading...</p>;

    return (
      <div className="gradient__bg">
        <main className={classes.content}>
          <div className="gradient__text productHeader">
            <h1>Featured Products</h1>
          </div>
          <div>
            <p className="p">We are more than just a beauty salon</p>
          </div>
          <div className={classes.toolbar} />
          <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    );
};