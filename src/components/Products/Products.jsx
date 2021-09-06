import Product from './Product/Product';
// import { Typography } from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

// const products = [
//     {id: 1, name: 'Soup', description: 'Indian Soup', price: '$5', image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80'},
//     {id: 2, name: 'Salad', description: 'Salad', price: '$10', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
// ];

const Products = ({ products, onAddToCart, errorLoad }) => {
    const classes = useStyles();

    // if (errorLoad) {
    //     console.log(errorLoad);
    //     return (
    //         <>
    //             <Typography variant='h5'>Error: {errorLoad}</Typography>
    //         </>
    //     );
    // } else {
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
