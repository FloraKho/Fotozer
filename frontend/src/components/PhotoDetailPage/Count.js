import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readComments } from '../../store/comments';

function Count({photoId}){

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);
    const commentsArr = Object.values(comments);


    useEffect(() => {
        dispatch(readComments(photoId))
    }, [dispatch, photoId]);


    return (
        <div className='pd-2-count'>
            <div className='pd-2-faves'>
                <p>10</p>
                <p>faves</p>
            </div>
            <div className='pd-2-comments'>
                <p>{commentsArr?.length}</p>
                <p>{commentsArr?.length > 1 ? 'comments' : 'comment'}</p>
            </div>
        </div>
    )

}

export default Count;