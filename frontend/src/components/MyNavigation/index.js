import { NavLink } from "react-router-dom";

function myNavigation () {
    return (
        <nav className='my-navigation'>
            <NavLink to='/photostream'>Photostream</NavLink>
            <NavLink to='/favourite'>Faves</NavLink>
        </nav>
    );
}

export default myNavigation;