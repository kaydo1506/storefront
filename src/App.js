import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, Navbar, Cart, Checkout, Preview } from './components';
// //////////////////////////////////////////////

// //////////////////////////////////////////////

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');

    // //////////////////////////////////////////////

    // const [preview, setPreview] = useState({});

    // const handleAddToPreview = async (productId) => {
    //     const { preview } = productId;

    //     setPreview(preview);
    // };
    // /////////////////////////////////////////////////////

    const fetchProducts = async () => {
        try {
            const { data } = await commerce.products.list();

            setProducts(data);
        } catch (err) {
            setErrorMessage2(`Slow network detected ${err}`);
        }
    };

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();

        setCart(cart);
    };
    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        // This is the cart after the item has been added
        setCart(cart);
    };
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
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
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart} errorLoad={errorMessage2} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />
                    </Route>
                  {/*  <Route path='/Preview/id'>
                        <Preview products={products} onAddToCart={handleAddToCart} />
    </Route> */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
