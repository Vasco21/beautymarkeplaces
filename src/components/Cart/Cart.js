import React from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./style";
import CartItem from './CartItem/CartItem';
import { Link } from "react-router-dom";
import "../../StyleAll.css";


export default function Cart({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }){
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.length) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3} >
        {cart.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </div>
    </>
  );

  return (
    <div className="backgroundColor">
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} gutterBottom>Your Shopping Cart</Typography>
      { !cart.length ? renderEmptyCart() : renderCart() }
    </Container>
    
    </div>
  );
};
