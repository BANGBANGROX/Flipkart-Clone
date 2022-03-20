import axios from "axios";
import * as action from "../../constants/productConstant";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products`);

    dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });

    console.log(data);
  } catch (err) {
    dispatch({ type: action.GET_PRODUCT_FAIL, payload: err.response });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/product/${id}`);

    dispatch({ type: action.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: action.GET_PRODUCT_DETAILS_FAIL, payload: err.response });
  }
};
