import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const demouser = async () => {
        return dispatch(sessionActions.login({ credential: "Demo_User", password: "demouser" }))
    }


    if (sessionUser) return (
        <Redirect to="/explore" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className='loginpage'>
            <div className='center'>
                <img onClick={() => history.push('/')} src='../photos/fotozer-logo-2.png' alt='fotozer_logo' />
                <div>
                    <button className='demo' onClick={demouser}>Log in as demo user</button>
                </div>
                <h3><span>or</span></h3>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li className='validation' key={idx}><i className="fa-solid fa-triangle-exclamation"></i>{error}</li>)}
                    </ul>
                    <label>
                        <i className="fa-solid fa-user"></i>
                        {/* Username or Email */}
                        <input
                            placeholder='Username or Email'
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <i className="fa-solid fa-key"></i>
                        {/* Password */}
                        <input
                            placeholder='Password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button className='login' type="submit">Log In</button>
                </form>
                <div className='signup-loginpage'>
                    <h4>Don't have an account?</h4>
                    <div><Link to='/signup' className='login-signup-link'>Create account</Link></div>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;