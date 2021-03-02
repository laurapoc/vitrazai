import React from "react";
import NavigationItem from "./navigationItem/NavigationItem";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.nav}>
      <NavigationItem link="/" exact>
        HOME
      </NavigationItem>
      <NavigationItem link="/posts">POSTS</NavigationItem>
    </ul>
  );
};

export default Navigation;
