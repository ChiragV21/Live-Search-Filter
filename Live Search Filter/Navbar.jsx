import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return (
        <>
            <div className="nav-bar">
                <NavLink exact className="active-class" to="/">Search Us</NavLink>
                <NavLink exact className="active-class" to="/contact">Contact Us</NavLink>
                <NavLink exact className="active-class" to="/about">About Us</NavLink>
            </div>
        </>
    );
}

export default Navbar;