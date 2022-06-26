import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readComments } from '../../store/comments';
import CommentForm from './CommentForm';
import CommentDisplay from './CommentDisplay';


function Comments({photoId}){

    const dispatch = useDispatch();
    
    const comments = useSelector((state) => state.comments);
    const commentsArr = Object.values(comments).sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
    );
    console.log(commentsArr, 'commentsArr.........');

    useEffect(() => {
        dispatch(readComments(photoId))
    }, [dispatch, photoId]);


    return (
        <div className='comments-part'>
            <CommentForm />
            <CommentDisplay />
        </div>
    )
}

export default Comments;