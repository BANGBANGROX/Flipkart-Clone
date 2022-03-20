import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    width: "80%",
    height: "65vh",
    background: "#fff",
    margin: "80px 140px",
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
    "& > *": {
      marginTop: 10,
      fontSize: 14,
    },
  },
  button: {
    marginTop: 20,
    padding: "12px 70px",
    borderRadius: 2,
    fontSize: 14,
    background: "#2874F0",
    color: "#fff",
  },
});

const EmptyCart = () => {
  const classes = useStyle();
  const emptycarturl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  const history = useNavigate();

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={emptycarturl} alt="emptyCart" className={classes.image} />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now</Typography>
        <Button
          variant="contained"
          onClick={() => history("/")}
          className={classes.button}
        >
          Show Now
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
