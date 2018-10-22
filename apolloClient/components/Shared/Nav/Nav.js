import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <header>
            <div className="container">
            <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Make a donation</a>
            </li>
            </ul>
            </div>
        </header>
    )
    }

export default Nav;