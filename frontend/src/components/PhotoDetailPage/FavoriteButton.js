import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPhotoFaves, createFave, removeFave } from '../../store/favorites';

function FavoriteButton ({photoId, sessionUser}) {

    const dispatch = useDispatch();
    const userId = sessionUser?.id;
    
    const faves = useSelector((state) => state.favorites);
    console.log(faves);
    
    const [favStatus, setFavStatus] = useState(false);

    useEffect(() => {
        dispatch(readPhotoFaves(photoId));
    }, [dispatch, photoId]);



    return (
        <div>
            <i className="fa-solid fa-star"></i>
        </div>

    )

}


export default FavoriteButton;