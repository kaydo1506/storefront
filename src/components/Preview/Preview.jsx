import React from 'react';
import useStyles from './style';

// import { Products } from '../Products/Products';
import { Typography, IconButton, Grid, ButtonBase, Button, InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

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
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container >
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt={product.name} src={product.media.source} />
                        </ButtonBase>
                    </Grid>

                    <Grid item xs container direction='column' spacing={2} className={classes.marginTop}>
                        <Typography variant='h5' gutterBottom component='h6' className={classes.name}>
                            {product.name}
                        </Typography>
                        <Typography
                            dangerouslySetInnerHTML={{ __html: product.description }}
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        />
                        <Typography variant='h6' component='h6' gutterBottom>
                            {product.price.formatted_with_symbol}
                        </Typography>
                        <FormControl>
                            <InputLabel id='demo-controlled-open-select-label'>Select Size</InputLabel>
                            <Select value={age} onChange={handleChange}>
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Small</MenuItem>
                                <MenuItem value={20}>Medium</MenuItem>
                                <MenuItem value={30}>Large</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <div className={classes.cardContent}>
                    <Button component={Link} variant='outlined' to='/'>
                        Go Back
                    </Button>
                    <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </div>
            </Paper>
        </div>
    );
};

export default Preview;
