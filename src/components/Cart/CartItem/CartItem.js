import React from 'react'
import { Typography , Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import useStyles from "./styles"


export default function CartItem({ item, onUpdateCartQty, onRemoveFromCart }){
    const classes = useStyles();
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
    return (
      <Card className="cart-item">
         {/* <CardMedia image={item.image.url} alt={item.name} className={classes.media} /> */}
         <CardMedia image={item.itemURL} alt={item.itemName} className={classes.media} />
         {/* image={product.itemURL} title={product.itemName} */}
        <CardContent className={classes.cardContent}>
        {/* <Typography variant="h4">{item.name}</Typography> */}
        <Typography variant="h4">{item.itemName}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};