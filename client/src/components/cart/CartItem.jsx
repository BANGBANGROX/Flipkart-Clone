import React from "react";
import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import GroupButton from "./GroupButton";

const useStyle = makeStyles({
  component: {
    borderTop: "1px solid #f0f0f0",
    borderRadius: 0,
    display: "flex",
    borderTop: "1px solid #f0f0f0",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  rightComponent: {
    margin: 20,
  },
  image: {
    height: 110,
    width: 110,
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});

const CartItem = ({ item, removeItemFromCart }) => {
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} />
        <GroupButton />
      </Box>
      <Box className={classes.rightComponent}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          style={{ marginTop: 10 }}
          className={clsx(classes.smallText, classes.greyTextColor)}
        >
          Seller : SuperComNet
          <span>
            <img
              src={fassured}
              alt="fassured"
              style={{ width: 50, marginLeft: 10 }}
            />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <span className={classes.price}>₹{item.price.cost}</span>
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Button
          className={classes.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
