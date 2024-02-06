import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <Link to='/create'>Create family</Link>
      <Link to='/family'>Family</Link>
    </div>
  );
};

export default Header;