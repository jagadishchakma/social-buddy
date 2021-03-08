import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
     return (
          <div className="header">
               <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/post">Post</Link>
                    <Link to="/dashboard">Dashboard</Link>
               </ul>
          </div>
     );
};

export default Header;