import { GETPRODUCTS } from "../const/products";

const intialstate = {
  products:[],
  oneProduct: {},
};

export const ProductReducer = (state = intialstate, action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return { ...state, products: action.payload };
    default:
     return state
  }
};
