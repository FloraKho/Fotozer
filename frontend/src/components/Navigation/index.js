import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginNav from './LoginNav';
import LogoutNav from './LoginNav';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
        <Redirect to='/' />
    );

    return (
        <>
            {sessionUser && isLoaded ? <LoginNav /> : <LogoutNav />}
        </>
    )
}


// function Navigation({ isLoaded }) {
//     const sessionUser = useSelector(state => state.session.user);
//     let sessionLinks;
//     if (sessionUser) {
//         sessionLinks = (
//             <ProfileButton user={sessionUser} />
//         );
//     } else {
//         sessionLinks = (
//             <>
//                 <NavLink to="/login">Log In</NavLink>
//                 <NavLink to="/signup">Sign Up</NavLink>
//             </>
//         );
//     }
//     return (
//         <ul>
//             <li>
//                 <NavLink exact to="/">Home</NavLink>
//                 {isLoaded && sessionLinks}
//             </li>
//         </ul>
//     );
// }

export default Navigation;