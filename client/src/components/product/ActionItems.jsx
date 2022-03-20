import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  image: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    height: 50,
    width: "46%",
    borderRadius: 2,
  },
  addToCart: {
    backgroundColor: "#ff9f00",
    color: "#fff",
    marginRight: 10,
  },
  buyNow: {
    backgroundColor: "#fb641b",
    color: "#fff",
  },
}));

const ActionItems = ({ product }) => {
  const classes = useStyles();

  const history = useNavigate();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    history("/cart");
  };

  const buyNow = async () => {
    try {
      let response = await payUsingPaytm({
        amount: 500,
        email: "lakshya0809bang@gmail.com",
      });
      console.log(response);
      let information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} alt="detailUrl" className={classes.image} />
      <br />
      <Button
        className={clsx(classes.button, classes.addToCart)}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <Cart style={{ marginRight: 4 }} /> Add To Cart
      </Button>
      <Button
        className={clsx(classes.button, classes.buyNow)}
        variant="contained"
        onClick={() => buyNow()}
      >
        <Flash style={{ marginRight: 4 }} />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItems;
