import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link key={product.id} to={`/preview/${product.id}`} className={classes.link}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}></CardMedia>
            </Link>
            {/* <CardMedia className={classes.media} image={product.media.source} title={product.name}></CardMedia>*/}

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
    );
};

export default Product;
