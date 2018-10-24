import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <header>
            <div className="container">
            <ul className="nav justify-content-end">
            <li className="nav-item">
                <a href="/donation" className="nav-link active">Make a donation</a>
            </li>
            </ul>
            </div>
        </header>
    )
    }

export default Nav;