import React, { useState, useEffect}from "react";
import Header  from "./components/Navbars/Header";
import HomePage  from "./components/Home/Slider";
import Products  from "./components/Product/Produts";
import Checkout  from "./components/CheckoutForm/Checkout/Checkout";
import Contact  from "./components/ContantsUs/Contactus";
import AboutUs from "./components/AboutUs/About";
import Footer  from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import "./App.css";
import "./index.css";
// import { commerce } from "./Lib/commerce";

const commerce = "https://uzuriapi.el.r.appspot.com/fashionPromotions";


function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

 
    
  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());  
  // };

  const handleAddToCart = async (productId, quantity) => {
    let newCart = cart
    let itemInCart = newCart.find(
      (item) => productId.name === item.id,
      (item) => quantity === item.id
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...productId,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    let componentMounted = true;
    const getProduct = async()=>{
      
      const response = await fetch(commerce);
      if(componentMounted){
        setProducts(await response.clone().json());
        setFilter(await response.json())
       
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProduct()
    // fetchProducts();
    // fetchCart();
  }, []);
  console.log(products);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
 
  
  return (
    <div className="App">
    <Router>
        <Route exact path="/">
        <div className="gradient__bg">
        <Header totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}/>
        <HomePage/>
        </div>
        </Route>
      <Switch>
      <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
      </Switch>
      <div>
        <Route exact path="/">
        <AboutUs/>
        <Contact/>
        </Route>
      </div> 
      <Route > 
      </Route>
    </Router>
        <Footer/>
    </div>
  );
}

export default App;
