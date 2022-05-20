import * as React from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import HomeIcon from '@mui/icons-material/Home';
function Header() {
  return (
    <header className="header">
         <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'><Link className='header__link' to='/'><HomeIcon /></Link></li>
            <li className='header__li'><Link className='header__link' to='dictionary'>Dictionary</Link></li>
            <li className='header__li'><Link className='header__link' to='about'>About</Link></li>
          </ul>
        </nav>
        <div className="logo">
            <h1 className="logoName">Zaiko</h1>
        </div>
    </header>
  );
}

export default Header;