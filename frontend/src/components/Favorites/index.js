import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import MyNavigation from "../MyNavigation";
import Banner from "../Banner";
import { readUserFaves } from '../../store/favorites'
import './Favorites.css';



function Favorites() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session?.user);
    const userId = sessionUser?.id;
    const faves = useSelector(state => state.favorites);
    const favesArr = Object.values(faves).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    useEffect(() => {
        if (userId) {
            dispatch(readUserFaves(userId));
        }
    }, [dispatch, userId]);

    useEffect(() => {
        history.push('/favorites');
    }, [history]);



    return (
        <div>
            <Banner sessionUser={sessionUser} />
            <MyNavigation />

            <div className='faves-gallery'>
                {favesArr && favesArr.map((fave) => {
                    return (
                        <div key={fave.id} className='faves-display' onClick={(e) => {
                            e.preventDefault();
                            history.push(`/photos/${fave.photoId}`);
                        }}>
                            <img src={fave.Photo?.imgURL} alt='user-faves' />
                            <div className='faves-overlay'>
                                <div className='faves-info'>
                                    <p className='faves-title'>{fave.Photo?.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites;