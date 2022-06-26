import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateComment } from "../../store/comments";

function CommentDisplay({ comment, sessionUser, photoId }) {

    const date = new Date(comment.createdAt).toLocaleDateString();

    const dispatch = useDispatch();
    const history = useHistory();

    const currentContent = comment?.content;

    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState(currentContent);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (!currentContent.length) {
            errors.push('Comment cannot be empty');
        }
        setErrors(errors);
    }, [currentContent]);

    const handleEditState = async () => {
        setContent(currentContent);
        setEdit(true);
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const editedComment = {
            id: comment.id,
            content: content,
            userId: sessionUser.id,
            photoId: photoId

        }
        dispatch(updateComment(editedComment));
        setErrors([]);
        setEdit(false);
        history.push(`/photos/${photoId}`);
    }


    return (
        <>
            <div className="comment">
                <div className="user-avatar">
                    <img className='avatar' src='../photos/user-3.png' alt='user_logo' />
                </div>
                <div className='comment-right'>
                    <div className='comment-content-1'>
                        <div className='username'>{comment?.User?.username}</div>
                        <div>{date}</div>
                        <div className='comment-button'>
                            {
                                sessionUser.id === comment.userId ? (
                                    <>
                                        <div className='comment-edit' onClick={handleEditState}>edit</div>
                                    </>
                                ) : ''
                            }

                        </div>
                        <div className='comment-content-2'>
                            {sessionUser.id === comment.userId && edit ? (
                                <form onSubmit={handleEditSubmit}>
                                    <div className="errors">
                                        <ul>
                                            {errors.map(error => (
                                                <li key={error}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <textarea
                                            type='text'
                                            value={content}
                                            onChange={e => setContent(e.target.value)}
                                            placeholder='Add a comment'

                                        />
                                        <button type='submit' disabled={!!errors.length}>Save</button>
                                    </div>
                                </form>
                            ) : (
                                <div>
                                    {/* <div onClick={handleEditState}> */}
                                    <div>
                                        <p>{currentContent}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentDisplay;