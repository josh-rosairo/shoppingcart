import {Product, products} from '../../constants/index';

/**
 *
 */


const initState = {
    products: products,
    cartProducts: [], //%TODO set type as Product
    total: 0
}

const shoppingCartReducer= (state = initState, action: any)=>{
    /***
    if(action.type === ADD_TO_CART){ //%TODO action types.
        // find clicked on product in our state's list of product constants and save said product for use further down.
        let addedProduct = state.products.find(product=> product.name === action.product.name && product.price === action.product.price)

        //check if its already in cart, in which case we increase the quantity total by 1
        let productAlreadyCarted = state.cartProducts.find(product=> product.name === action.product.name && product.price === action.product.price)
        if (productAlreadyCarted) {
            addedProduct.quantity += 1
            return {
                ...state,
                total: state.total + addedProduct.price
            }
        }

        //if not, then we add the product to cart

        //regardless we recalculate price total > apply changes to state > return.
    }
    ***/

    return state;
}
export default shoppingCartReducer;