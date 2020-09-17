import { products } from '../../constants/index';

/**
 *
 */


const initState = {
    products: products,
    cartProducts: [],
    total: 0
}

const shoppingCartReducer= (state = initState, action)=>{
    if(action.type === ADD_TO_CART){ //%TODO action types.
        // find clicked on product in our state's list of product constants.
        let addedProduct = state.products.find(product=> product.name === action.product.name && product.price === action.product.price)

        //check if its already in cart, in which case we increase the quantity total by 1

        //if not, then we add the product to cart

        //regardless we recalculate price total > apply changes to state > return.
    }
    else {
        return state;
    }
}
export default shoppingCartReducer;