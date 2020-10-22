import React from 'react'
import './header.css'
import logo from '../../img/airbnb__logo.png'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
      <Link to="/">
      <img className='header__logo' src={logo} alt="airbnb logo"/>
      </Link>
    <div className="header__center">
      <input type="text" />
      <SearchIcon/>
    </div>
    <div className="header__right">
      <p>Become a host</p>
      <LanguageIcon/>
      <ExpandMoreIcon/>
      <Avatar/>
    </div>
    </nav>

  )
}

export default Header
