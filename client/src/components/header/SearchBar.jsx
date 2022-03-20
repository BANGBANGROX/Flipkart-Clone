import React, { useState, useEffect } from "react";
import { makeStyles, InputBase, List, ListItem } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { getProducts } from "../../redux/actions/prodcutActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#FFFFFF",
    marginTop: 36,
  },
}));

const SearchBar = () => {
  const classes = useStyle();

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setText(e.target.value);
          setOpen(false);
        }}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
      {text && (
        <List className={classes.list} hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setOpen(true)}
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
