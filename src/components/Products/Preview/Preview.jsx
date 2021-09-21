import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
const Preview = ({ products, onAddToCart }) => {
    const classes = useStyles();
    const [product, setProduct] = useState();

    const params = useParams();

    const findProduct = useCallback(
        (id) => {
            return products.find((product) => {
                if (product.id === id) {
                    setProduct(product);
                    return true;
                }
                return false;
            });
        },
        [products]
    );

    const productId = useMemo(() => params.id, [params.id]);

    useEffect(() => {
        findProduct(productId);
    }, [productId, findProduct]);

    const renderCard = useCallback(() => {
        if (!product) return 'loading...';
        return (
            <div className={classes.root} style={{ marginTop: '100px' }}>
                <Card style={{ height: 'auto', padding: '30px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                style={{ maxHeight: '800px' }}
                                component='img'
                                image={product.media.source}
                                title={product.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                ></Typography>
                                <Typography variant='h6' component='h6' gutterBottom>
                                    {product.price.formatted_with_symbol}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <CardActions className={classes.cardActions}>
                        <Button component={Link} variant='outlined' to='/'>
                            Go Back
                        </Button>
                        <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        );
    }, [product, onAddToCart, classes.root, classes.cardActions]);

    return renderCard();

    //     <Card sx={{ maxWidth: 345 }} style={{ marginTop: '90px', width: ' 800px' }}>
    //     <CardMedia component='img' height='100%' image={product.media.source} title={product.name} />
    //     <CardContent>
    //         <Typography gutterBottom variant='h5' component='div'>
    //             {product.name}
    //         </Typography>
    //         <Typography
    //             variant='body2'
    //             color='textSecondary'
    //             dangerouslySetInnerHTML={{ __html: product.description }}
    //         ></Typography>
    //         <Typography variant='h6' component='h6' gutterBottom>
    //             {product.price.formatted_with_symbol}
    //         </Typography>
    //     </CardContent>
    //     <CardActions>
    //         <IconButton component={Link} variant='outlined' to='/'>
    //             Go Back
    //         </IconButton>
    //         <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
    //             <AddShoppingCart />
    //         </IconButton>
    //     </CardActions>
    // </Card>

    // import useStyles from './style';

    // const classes = useStyles();

    // import { Products } from '../Products/Products';
    // import { Typography, IconButton, Grid, ButtonBase, Button, InputLabel } from '@material-ui/core';
    // import MenuItem from '@material-ui/core/MenuItem';
    // import FormControl from '@material-ui/core/FormControl';
    // import Select from '@material-ui/core/Select';
    // import { AddShoppingCart } from '@material-ui/icons';
    // import { Link } from 'react-router-dom';
    // import Paper from '@material-ui/core/Paper';

    // const [size, setSize] = React.useState('');
    // const handleChange = (event) => {
    //     setSize(event.target.value);
    // };

    // return (
    //     <div className={classes.root}>
    //         <Paper className={classes.paper}>
    //             <Grid container>
    //                 <Grid item>
    //                     <ButtonBase className={classes.image}>
    //                         <img className={classes.img} alt={product.name} src={product.media.source} />
    //                     </ButtonBase>
    //                 </Grid>

    //                 <Grid item xs container direction='column' spacing={2} className={classes.marginTop}>
    //                     <Typography variant='h5' gutterBottom component='h6' className={classes.name}>
    //                         {product.name}
    //                     </Typography>
    //                     <Typography
    //                         dangerouslySetInnerHTML={{ __html: product.description }}
    //                         variant='body2'
    //                         color='textSecondary'
    //                         component='p'
    //                     />
    //                     <Typography variant='h6' component='h6' gutterBottom>
    //                         {product.price.formatted_with_symbol}
    //                     </Typography>
    //                     <FormControl>
    //                         <InputLabel id='demo-controlled-open-select-label'>Select Size</InputLabel>
    //                         <Select value={size} onChange={handleChange}>
    //                             <MenuItem value=''>
    //                                 <em>None</em>
    //                             </MenuItem>
    //                             <MenuItem value={10}>Small</MenuItem>
    //                             <MenuItem value={20}>Medium</MenuItem>
    //                             <MenuItem value={30}>Large</MenuItem>
    //                         </Select>
    //                     </FormControl>
    //                 </Grid>
    //             </Grid>
    //             <div className={classes.cardContent}>
    //                 <Button component={Link} variant='outlined' to='/'>
    //                     Go Back
    //                 </Button>
    //                 <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
    //                     <AddShoppingCart />
    //                 </IconButton>
    //             </div>
    //         </Paper>
    //     </div>
    // );
};

export default Preview;
