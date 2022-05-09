import { ADD_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from './../constants/product-constants';
export const productReducer = (state = { products: [] }, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT: return { products: [...state.products, payload] };
        case GET_PRODUCT_SUCCESS: return { reduxProduct: payload };
        case GET_PRODUCT_FAIL: return { error: payload };
        default: return state;
    }
}

/// this is the casheared reducer
