import * as React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Product} from "../constants";
import {Component} from "react";
import {addToCart} from "./actions/shoppingCartActions";

interface MyProps {
    products: [Product]
}

interface MyState {
    products: [Product],
    cartProducts: [Product],
    total: number
}

/**
 * Product Display, will display all the products available for 'purchase'
 * Users will be able to add any quantity of these products to their cart
 * **/
class ProductDisplay extends Component<MyProps, MyState>  {

    //%TODO const classes = useStyles();
    handleClick = (item: Product)=>{
        //this.props.addToCart(item);
    }


    render() {
        return (
            <div>
                <List component="nav">
                    {this.props.products.map((item, i) => (
                        <ListItem button key={i} onClick={()=>{this.handleClick(item)}}>
                            <ListItemText primary={`Item: ${item.name} ---- Price: $${item.price}`}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
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

// %TODO reducer
// use map state to props (so that products can be displayed here)
const mapStateToProps = (state:MyState)=>{
    return {
        products: state.products
    }
}

// %TODO REDUCER
const mapDispatchToProps= (dispatch: any)=>{
    return{
        addToCart: (item: Product)=>{dispatch(addToCart(item))}
    }
}


export default connect(mapStateToProps)(ProductDisplay)