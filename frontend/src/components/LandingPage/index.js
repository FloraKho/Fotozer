import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './LandingPage.css'

function LandingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const demouser = async () => {
        dispatch(sessionActions.login({ credential: "Demo_User", password: "demouser" }));
        history.push('/explore');
    }
    if (sessionUser) return <Redirect to="/explore" />;

    return (
        <>
            <div className='landingpage'>
                <div className='landingpage-navbar'>
                    <div className='landingpage-navbar-left'>
                        <img src='../photos/Fotozer.png' alt='Fotozer-Text-Logo' />
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
                <div className='landingpage-main'>
                    <h1>Frozen Memories</h1>
                    <p>Photographs are to memories what memory is to time
                        <br></br>
                        Join the largest, most influential community of photographers in the world.
                    </p>
                    <button type='button' className='signup-button'>
                        <span></span>
                        <a href='/signup'>Start Here</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LandingPage;