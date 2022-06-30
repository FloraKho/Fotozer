import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeAlbum } from '../../store/albums';
import './DeletePhoto.css';

function DeleteAlbum({ albumId }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        await dispatch(removeAlbum(albumId));
        setShowModal(false);
        history.push(`/albums`);
    }

    return (
        <>
            <div className='delete-btn'>
                <h2 onClick={() => setShowModal(true)}><i className="fa-solid fa-circle-trash"></i></h2>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2 className='modal-title'>Delete Album</h2>
                    <p className='modal-text'>Are you sure you want to delete this album?</p>
                    <div className='modal-button'>
                        <button className='modal-button-cancel' onClick={() => setShowModal(false)}>Cancel</button>
                        <button className='modal-button-confirm' onClick={handleDeleteSubmit}>Delete</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteAlbum;