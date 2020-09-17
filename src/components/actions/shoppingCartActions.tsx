import {Product} from "../../constants";

export const addToCart= (product: Product)=>{
    return{
        //type: ADD_TO_CART, //@TODO make action types folder and add this to types.
        product }
}