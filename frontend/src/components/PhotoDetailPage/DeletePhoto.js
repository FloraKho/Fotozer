import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removePhoto } from '../../store/photos';
import './DeletePhoto.css';

function DeletePhoto ({photo}) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        await dispatch(removePhoto(photo.id));
        setShowModal(false);
        history.push(`/photostream`);
    }

    return (
        <>
            <div className='delete-btn'>
                <h2 onClick={() => setShowModal(true)}><i className="fa-solid fa-trash-can"></i></h2>
            </div> 
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {/* <div className='delete-form'> */}
                        {/* <div className='delete-title'> */}
                            <h2 className='modal-title'>Delete Photo</h2>
                        {/* </div> */}
                        {/* <div className='delete-message'> */}
                    <p className='modal-text'>Are you sure you want to delete this photo?</p>
                        {/* </div> */}
                        <div className='modal-button'>
                            <button className='modal-button-cancel' onClick={() => setShowModal(false)}>Cancel</button>
                            <button className='modal-button-confirm' onClick={handleDeleteSubmit}>Delete</button>
                        </div>
                    {/* </div> */}
                </Modal>
            )}
        </>
    )
}

export default DeletePhoto;