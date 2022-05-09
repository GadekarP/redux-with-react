import axios from "axios";
import { ADD_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from './../constants/product-constants';

export const depositAction = () => async dispatch => {
    const {data}= await axios.post('http://localhost:5000/products',{name:"xps",price:100});
    dispatch({ type: ADD_PRODUCT, payload: { name: "xps", price: 5000000 } })
}
export const getAllProductAction=()=>async dispatch =>{
    try {
        const {data}= await axios.get('http://localhost:5000/products');
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL,payload:error})
    }
}