import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You have no items in your cart,
            <Link to='/' className={classes.link}>
                {' '}
                start adding some
            </Link>
            !
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={4}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} className={classes.cartGrid} key={item.id}>
                        <CartItem
                            item={item}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h6'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size='large'
                        type='button'
                        variant='contained'
                        color='secondary'
                        onClick={handleEmptyCart}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        component={Link}
                        to='/checkout'
                        className={classes.checkoutButton}
                        size='large'
                        type='button'
                        variant='contained'
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'loading...';
    return (
        <div className={classes.content}>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant='h5' gutterBottom>
                    Your Shopping Cart
                </Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>
    );
};

export default Cart;
