import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './PageNotFound.css';


function PageNotFound() {

    const sessionUser = useSelector((state) => state.session.user);


    return (
        <>

            <div className='pagenotfound'>
                {sessionUser ? (<Link to='/explore'><button>Go Back</button></Link>) :

                    (<Link to='/'><button>Go Back</button></Link>)}
            </div>

        </>
    )
}

export default PageNotFound;