import React, {Fragment} from 'react';
import classes from './Header.module.css'


const Header = () => {
  return (
    <Fragment>
    <div className={classes.HeaderBackground}></div>
    <span className={classes.HeaderText}>Todo List</span>
   </Fragment>
  );
}

export default Header;
