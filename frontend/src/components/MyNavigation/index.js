import React from 'react';
import { NavLink } from "react-router-dom";
import './MyNavigation.css'

function MyNavigation() {
    return (
        <nav className='my-navigation'>
            <NavLink to='/photostream' className={({ isActive }) => (isActive ? "active" : "inactive")}
                style={isActive => ({
                    color: isActive ? "#fff" : '#6c757d'
                })}>Photostream</NavLink>
            {/* <NavLink to='/ablums' className={({ isActive }) => (isActive ? "active" : "inactive")}
                style={isActive => ({
                    color: isActive ? "#fff" : '#6c757d'
                })}>Albums</NavLink> */}
            <NavLink to='/favorites' className={({ isActive }) => (isActive ? "active" : "inactive")}
                style={isActive => ({
                    color: isActive ? "#fff" : '#6c757d'
                })}>Faves</NavLink>
            {/* <NavLink to='/photostream' activeClassName='active'>Photostream</NavLink>
            <NavLink to='/ablums' activeClassName="active">Albums</NavLink>
            <NavLink to='/favorites' activeClassName="active">Faves</NavLink> */}
            {/* <NavLink to='/photostream' className={({ isActive }) => (isActive ? "active" : "inactive")}>Photostream</NavLink>
            <NavLink to='/ablums' className={({ isActive }) => (isActive ? "active" : "inactive")}>Albums</NavLink>
            <NavLink to='/favorites' className={({ isActive }) => (isActive ? "active" : "inactive")}>Faves</NavLink> */}
        </nav>
    );
}

export default MyNavigation;