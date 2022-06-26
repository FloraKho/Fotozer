import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readComments } from '../../store/comments';
import CommentForm from './CommentForm';
import CommentDisplay from './CommentDisplay';


function Comments({photoId}){

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const comments = useSelector((state) => state.comments);
    const commentsArr = Object.values(comments).sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
    );

    useEffect(() => {
        dispatch(readComments(photoId))
    }, [dispatch, photoId]);


    if(!commentsArr.length) return null;

    return (
        <div className='comments-part'>
            <CommentForm sessionUser={sessionUser} photoId={photoId} />
            <div className="comments-container">
                {commentsArr.map((comment) => (
                    <CommentDisplay
                        key={comment.id}
                        comment={comment}
                        sessionUser={sessionUser}
                        photoId={photoId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments;