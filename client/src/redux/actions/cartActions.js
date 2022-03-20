import axios from "axios";
import * as actionTypes from "../../constants/cartConstants";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (err) {
    console.log("Error while calling add to cart api");
    console.log(err);
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
