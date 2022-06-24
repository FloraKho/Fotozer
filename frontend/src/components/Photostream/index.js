import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { readAllPhotos } from '../../store/photos';
import MyNavigation from '../MyNavigation';
import Banner from '../Banner';
import './Photostream.css';

function Photostream() {

    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user?.id);
    const sessionUser = useSelector(state => state.session.user);


    const photos = useSelector(state => state.photos);
    const photoArr = Object.values(photos).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    console.log('photoArr........here ', photoArr);

    useEffect(() => {
        if (userId) {
            dispatch(readAllPhotos(userId));
        }

    }, [dispatch, userId]);

    useEffect(() => {
        history.push(`/photostream`);
    }, [history]);



    if (!photoArr.length > 0) return (
        <p className='loading'><i className="fa-solid fa-spinner"></i> Loading...</p>
    )
    return (
        <>
            <div className='photostream-page'>

                <Banner sessionUser={sessionUser} />
                <MyNavigation />

                <div className='myphoto-gallery'>
                    {photoArr.map((photo) => {
                        return (
                            <div key={photo.id} className='myphoto-display' onClick={(e) => {
                                e.preventDefault();
                                history.push(`/photos/${photo.id}`);
                            }}>
                                <img src={photo.imgURL} alt={photo.title} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Photostream;