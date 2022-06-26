import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createComment } from '../../store/comments';

function CommentForm({ sessionUser, photoId }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    // const [commentStatus, setCommentStatus] = useState(false);

    useEffect(() => {
        const errors = [];
        if (!content.length) {
            errors.push('Comment cannot be empty');
        }
        setErrors(errors);
    }, [content]);

    const handleCreate = async (e) => {
        e.preventDefault();
        const newComment = {
            content: content,
            userId: sessionUser.id,
            photoId: photoId
        }
        dispatch(createComment(newComment));
        setErrors([]);
        setContent('');
        // setCommentStatus(false);
        history.push(`/photos/${photoId}`);
    }

    // const handleCancelSubmit = async (e) => {
    //     e.preventDefault();
    //     setContent('');
    // }

    return (
        <>
            {/* <div className="comment-image-container">
                <img src='../../photos/camera-2.png' alt='comment-logo' />
            </div> */}
            <div className='comment-form'>
            <form onSubmit={handleCreate}>
                <textarea
                    className="comment-form-textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Add a Comment'
                />
                {/* <button onClick={handleCancelSubmit}>
                    Cancel
                </button> */}

                <button type="submit" disabled={!!errors.length && !content?.length}>
                    Comment
                </button>

            </form>
            </div>
        </>
    )

}

export default CommentForm;