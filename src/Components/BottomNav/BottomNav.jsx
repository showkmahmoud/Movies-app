import React from "react";
import { Link } from "react-router-dom";
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
    paddingBottom: "80px",
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
      <Link to="/" className='mx-2'>
        <BottomNavigationAction
          className="text-white"
          icon={<WhatshotIcon />}
        />
        <span className="text-white text-center d-block">Trending</span>
      </Link>
      <Link to="/movies" className='mx-2'>
        <BottomNavigationAction className="text-white" icon={<MovieIcon />} />
        <span className="text-white text-center d-block">Movies</span>
      </Link>
      <Link to="/series" className='mx-2'>
        <BottomNavigationAction className="text-white" icon={<TvIcon />} />
        <span className="text-white text-center d-block">TV Series</span>
      </Link>
      <Link to="/search" className='mx-2'>
        <BottomNavigationAction className="text-white" icon={<SearchIcon />} />
        <span className="text-white text-center d-block">Search</span>
      </Link>
    </BottomNavigation>
  );
};

export default BottomNav;
