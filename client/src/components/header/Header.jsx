import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  logo: {
    width: 75,
  },
  container: {
    display: "flex",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  subURL: {
    width: 10,
    height: 10,
    marginLeft: 4,
  },
  list: {
    width: 250,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  customButtons: {
    margin: "0 5% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box className={classes.list} onClick={handleClose}>
      <List>
        <ListItem button>
          <HeaderButtons />
        </ListItem>
      </List>
    </Box>
  );

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div>
      <AppBar className={classes.header}>
        <ToolBar>
          <IconButton
            color="inherit"
            className={classes.menuButton}
            onClick={handleOpen}
          >
            <Menu />
          </IconButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Link to="/" className={classes.component}>
            <img src={logoURL} className={classes.logo} alt="not found" />
            <Box className={classes.container}>
              <Typography className={classes.subHeading}>
                Explore{" "}
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus
                </Box>
              </Typography>
              <img src={subURL} className={classes.subURL} alt="not found" />
            </Box>
          </Link>
          <SearchBar />
          <span className={classes.customButtons}>
            <HeaderButtons />
          </span>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
