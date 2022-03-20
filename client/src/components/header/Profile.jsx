import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
  },
});

const Profile = ({ account, setAccount }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    localStorage.removeItem(account);
    setAccount("");
  };

  return (
    <>
      <Typography
        style={{ marginTop: 4, fontSize: 15, cursor: "pointer" }}
        onClick={handleClick}
      >
        {account}
      </Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
