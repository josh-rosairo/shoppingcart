import { products } from '../../constants/index';

/**
 *
 */


const initState = {
    products: products,
    cartProducts: [],
    total: 0
}

const shoppingCartReducer= (state = initState)=>{
    return state;
}
export default shoppingCartReducer;