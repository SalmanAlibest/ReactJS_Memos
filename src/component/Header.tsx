import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { generatePath, useHistory } from "react-router";
import { ROUTES } from "../routes";
import { useDispatch, useSelector } from "react-redux";
import logo from "../applogo.png";
const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <img
            src={logo}
            style={{ marginLeft: 10 }}
            height={35}
            width={35}
            alt="DB"
          />
          <Typography variant="h6" className={classes.title}>
            Dombox
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.menuButtonLg}
            onClick={() => {
              history.push(generatePath(ROUTES.CREATE_POST));
            }}
          >
            Create Post
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.menuButtonSm}
            onClick={() => {
              history.push(generatePath(ROUTES.CREATE_POST));
            }}
          >
            +
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtonLg: {
    marginRight: theme.spacing(2),
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuButtonSm: {
    marginRight: theme.spacing(2),
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontWeight: "bold",
  },
}));

export default Header;
