import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css';


function LogoutNav() {
    const dispatch = useDispatch();
    const history = useHistory();

    const demouser = async () => {
        dispatch(sessionActions.login({ credential: "Demo_User", password: "demouser" }));
        history.push('/explore');
    }

    return (
        <div className='landingpage-navbar'>
            <div className='landingpage-navbar-left'>
                <img onClick={() => history.push('/')} src='../photos/fotozer-logo-1.png' alt='fotozer_logo' />
            </div>
            <ul className='navbar-center'>
                <li>
                    <a href={`https://www.linkedin.com/in/jingjingxu-flora/`}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/FloraKho/Fotozer'>
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
            <div className='landingpage-navbar-right'>
                <Link className='link' to='/login'>Log In</Link>
                <button className='demouser' onClick={demouser}>Demo User</button>
            </div>
        </div>
    )
}


export default LogoutNav;