import React from 'react';
import { NavLink } from "react-router-dom";
import './MyNavigation.css'

function MyNavigation () {
    return (
        <nav className='my-navigation'>
            <NavLink to='/photostream' className={({ isActive }) => (isActive ? "active" : "inactive")}>Photostream</NavLink>
            <NavLink to='/ablums' className={({ isActive }) => (isActive ? "active" : "inactive")}>Albums</NavLink>
            <NavLink to='/favorites' className={({ isActive }) => (isActive ? "active" : "inactive")}>Faves</NavLink>
        </nav>
    );
}

export default MyNavigation;