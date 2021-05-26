import React from "react";
import "./BottomNav.css";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});
const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className="text-white"
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        className="text-white"
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        className="text-white"
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        className="text-white"
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
