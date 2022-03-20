import React, { useEffect } from "react";
import Navbar from "./home/Navbar";
import Banner from "./home/Banner";
import Slide from "./home/Slide";
import MidSection from "./home/MidSection";
import { Box, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/prodcutActions";
import MidSlide from "./home/Midslide";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "white",
    padding: "5px",
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

const Home = () => {
  const classes = useStyle();

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <MidSlide products={products} />
        <MidSection />
        <Slide timer={false} title="Discounts for You" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Top Selections" products={products} />
        <Slide timer={false} title="Recommended Items" products={products} />
        <Slide timer={false} title="Best sellers" products={products} />
      </Box>
    </div>
  );
};

export default Home;
