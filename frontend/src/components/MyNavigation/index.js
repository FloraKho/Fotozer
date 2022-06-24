import { NavLink } from "react-router-dom";

function MyNavigation () {
    return (
        <nav className='my-navigation'>
            <NavLink to='/photostream'>Photostream</NavLink>
            <NavLink to='/ablums'>Albums</NavLink>
            <NavLink to='/favourite'>Faves</NavLink>
        </nav>
    );
}

export default MyNavigation;