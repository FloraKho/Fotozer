import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUserFaves, createFave, removeFave } from '../../store/favorites';

function FavoriteButton({ photoId, sessionUser }) {

    const dispatch = useDispatch();
    const userId = sessionUser?.id;

    const faves = useSelector((state) => state.favorites);
    const favesArr = Object.values(faves);
    const currentFave = favesArr.find((fave) => fave?.userId === +userId && fave?.photoId === +photoId);
    
    useEffect(() => {
        dispatch(readUserFaves(userId));
    }, [dispatch, userId]);

    const handleLike = async (e) => {
        e.preventDefault();
        const newFave = {
            userId: userId,
            photoId: photoId
        }
        await dispatch(createFave(newFave));
    }

    const handleUnlike = async (e) => {
        e.preventDefault();
        await dispatch(removeFave(currentFave.id));
       
    }

 
    if (!currentFave) {
        return (
            <>
            <div>
                 <h2 onClick={handleLike}><i className="fa-regular fa-star"></i></h2>
            </div>
            </>
        )
    }

    return (
        <>
            <div>
                <h2 onClick={handleUnlike}><i className="fa-solid fa-star"></i></h2>
            </div>
        </>
    )

}



export default FavoriteButton;