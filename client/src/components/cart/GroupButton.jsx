import React from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: "50%",
  },
});

const GroupButton = () => {
  const classes = useStyle();
  const [counter, setCounter] = useState(1);

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <ButtonGroup className={classes.component}>
      <Button
        className={classes.button}
        onClick={() => handleDecrement()}
        disabled={counter === 0}
      >
        -
      </Button>
      <Button>{counter}</Button>
      <Button className={classes.button} onClick={() => handleIncrement()}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupButton;
