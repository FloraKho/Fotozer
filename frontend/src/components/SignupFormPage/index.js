import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


function SignupFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/explore" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className='signuppage'>
            <div className='signupform'>
                <img onClick={() => history.push('/')} src='../photos/fotozer-logo-2.png' alt='fotozer_logo' />
                <p>Join Fotozer today!</p>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => <li className='validation' key={idx}><i className="fa-solid fa-triangle-exclamation"></i>{error}</li>)}
                    </ul>
                    <label>
                        {/* Email */}
                        <i className="fa-solid fa-envelope"></i>
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        {/* Username */}
                        <i className="fa-solid fa-user"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        {/* Password */}
                        <i className="fa-solid fa-unlock-keyhole"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        {/* Confirm Password */}
                        <i className="fa-solid fa-lock"></i>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                    <div className='signup'>
                        <button className='signup-btn' type="submit">Sign up</button>
                    </div>
                </form>
                <div className='accountuser'>
                    <h4>Already have an account?</h4>
                    <div><Link to='/login' className='signup-login-link'>Log In</Link></div>
                </div>
            </div>
        </div>
    );
}

export default SignupFormPage;