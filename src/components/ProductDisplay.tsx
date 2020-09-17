import React, { Component } from 'react';
import { products } from '../constants/index';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * Product Display, will display all the products available for 'purchase'
 * Users will be able to add any quantity of these products to their cart
 * **/
const ProductDisplay = () =>{

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {products.map((item,i)=>(
                    <ListItem button key={i}>
                        <ListItemText primary={`Item: ${item.name} ---- Price: $${item.price}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}


// material ui styling information for product list
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 20,
            margin: 'auto',
            width: '100%',
            maxWidth: 450
        },
    }),
);

// %TODO reducer state mapping


export default (ProductDisplay)