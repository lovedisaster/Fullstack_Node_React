import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
const Header = () => {
    return(
       <header>
        <div className='logo pull-left'>
            <img src='/public/img/logo.png'/>
        </div> 
        <nav className='pull-right'>
                <IndexLink to="/" className="nav_link" activeClassName="active">Home</IndexLink>
                <Link to="/about" className="nav_link" activeClassName="active">About</Link>
                <Link to="/property-list" className="nav_link" activeClassName="active">Properties</Link>
        </nav>  
       </header>
    );
};

export default Header;