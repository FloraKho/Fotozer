import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readComments } from '../../store/comments';
import { readPhotoFaves } from '../../store/favorites';

function Count({photoId}){

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);
    const commentsArr = Object.values(comments);

    const faves = useSelector((state) => state.favorites);
    const favesArr = Object.values(faves);


    useEffect(() => {
        dispatch(readComments(photoId))
    }, [dispatch, photoId]);

    useEffect(() => {
        dispatch(readPhotoFaves(photoId));
    })


    return (
        <div className='pd-2-count'>
            <div className='pd-2-faves'>
                <p>{favesArr?.length}</p>
                <p>{favesArr?.length > 1 ? 'faves' : 'fave'}</p>
            </div>
            <div className='pd-2-comments'>
                <p>{commentsArr?.length}</p>
                <p>{commentsArr?.length > 1 ? 'comments' : 'comment'}</p>
            </div>
        </div>
    )

}

export default Count;