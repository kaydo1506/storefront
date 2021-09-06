import React from 'react';
import useStyles from './style';
// import { Products } from '../Products/Products';
import { Typography, Card, CardActions, CardContent, CardMedia, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Preview = ({ products, onAddToCart }) => {
    const classes = useStyles();

    console.log(products[0]);
    // console.log(window.location.pathname.split('').slice(9, 28).join(''));

    const findProduct = (id) => {
        return products.find((product) => product.id === id) || null;
    };
    const productId = window.location.pathname.split('').slice(9, 28).join('');
    let product = findProduct(productId);
    console.log(product);
    console.log(productId);
    window.addEventListener('load', (e) => {
        const findProduct = (id) => {
            return products.find((product) => product.id === id) || null;
        };
        const productId = window.location.pathname.split('').slice(9, 28).join('');
        let product = findProduct(productId);
        console.log(product);
        console.log(productId);
    });
    return (
        <Grid className={classes.marginTop} item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}></CardMedia>

                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom component='h6' className={classes.name}>
                            {product.name}
                        </Typography>
                        <Typography variant='h6' component='h2'>
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography
                        dangerouslySetInnerHTML={{ __html: product.description }}
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Preview;
