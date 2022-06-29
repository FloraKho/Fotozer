import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';
import './Navigation.css';


function LoginNav() {

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };


    return (
        <>
            <header>
                <nav className='Navbar'>
                    <div className='Navbar-left'>
                        <img onClick={() => history.push('/explore')} src='../photos/fotozer-logo-1.png' alt='fotozer_logo' />
                        <ul className='navlist'>
                            <li>
                                <Link className='a' to='/photostream'>You</Link>
                            </li>
                            <li>
                                <Link className='a' to='/explore'>Explore</Link>
                            </li>
                            <li>
                                <Link className='a' to='/search'>Search</Link>
                            </li>
                       
                            
                        </ul>
                    </div>
                    <div className='Navbar-right'>
                        <ul className='navlist'>
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

                            <li>
                                <Link to='/photos/upload'><i className="fa-solid fa-cloud-arrow-up"></i></Link>
                            </li>
                            <li>
                                <button className='signout-btn' onClick={logout}>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default LoginNav;