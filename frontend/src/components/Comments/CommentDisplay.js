import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateComment } from "../../store/comments";
import DeleteComment from "./DeleteComment";

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
            <div className="pd-3-display">
                <div className="user-avatar">
                    <img className='avatar-2' src='../photos/user-3.png' alt='user_logo' />
                </div>
                <div className='pd-3-display-comment'>
                    <div className='comment-1'>
                        <div className='comment-1-name-date'>
                            <div className='comment-1-name'>{comment?.User?.username}</div>
                            <div className='comment-1-date'>{date}</div>
                        </div>
                        <div className='comment-button'>
                            {
                                sessionUser.id === comment.userId ? (
                                    <>
                                        <div className='comment-edit' onClick={handleEditState}><i className="fa-solid fa-pen-to-square comment-edit"></i></div>
                                        <DeleteComment commentId={comment?.id} photoId={photoId} />
                                    </>
                                ) : ''
                            }

                        </div>
                    </div>
                    <div className='comment-2'>
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
                                        className='comment-form-edit'
                                        type='text'
                                        value={content}
                                        onChange={e => setContent(e.target.value)}
                                        placeholder='Add a comment'

                                    />
                                    <div className='comment-form-edit-btn'>
                                        <button type='submit' disabled={!!errors.length || !content.length}>Save</button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className='comment-2-content-display'>
                                {/* <div onClick={handleEditState}> */}
                                <p className='comment-2-content'>{currentContent}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default CommentDisplay;