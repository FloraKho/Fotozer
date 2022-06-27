import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { removeComment } from '../../store/comments';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './Comments.css';

function DeleteComment({ commentId, photoId }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);


    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        await dispatch(removeComment(commentId));
        setShowModal(false);
        history.push(`/photos/${photoId}`);
    }

    return (
        <>
            <div><i onClick={() => setShowModal(true)} className="fa-solid fa-trash comment-delete"></i></div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2 className='modal-title'>Delete Comment</h2>
                    <p className='modal-text'>Are you sure you want to delete this comment?</p>

                    <div className='modal-button'>
                        <button className='modal-button-cancel' onClick={() => setShowModal(false)}>Cancel</button>
                        <button className='modal-button-confirm' onClick={handleDeleteSubmit}>Delete</button>
                    </div>

                </Modal>
            )}
        </>

    )
}

export default DeleteComment;