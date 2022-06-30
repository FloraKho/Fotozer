import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { uploadPhoto } from '../../store/photos';
import './UploadPhoto.css';


function UploadPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user?.id);

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDiscription] = useState('');
    const [image, setImage] = useState(null);


    useEffect(() => {
        const errors = [];
        if (!image) {
            errors.push("Please choose an image file");
        }

        if (title.length > 50) {
            errors.push("Title must be within 50 characters");
        }
        else if (!title.length) {
            errors.push("Please enter a title");
        }
        setErrors(errors);
    }, [title, description, image]);

    useEffect(() => {
        history.push(`/photos/upload`);
    }, [history]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const photoInfo = {
            title,
            description,
            image,
            userId
        }
        const photo = await dispatch(uploadPhoto(photoInfo));
        setErrors([]);
        setTitle('');
        setDiscription('');
        setImage(null);
        history.push(`/photos/${photo.id}`);
    }

    const handleCancelSubmit = async (e) => {
        e.preventDefault();
        setTitle('');
        setDiscription('');
        setImage(null);
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    }

    return (
  
        <div className='upload-page'>
            <div className='up-center'>
                <div>
                    <button className='up-back-btn' onClick={() => history.goBack()}><i className="fa-solid fa-circle-arrow-left"></i>Back</button>
                </div>
                <div className='up-info'>
                    <h2>Upload your image</h2>
                    <div className="up-errors">
                        <ul>
                            {errors.map(error => (
                                <li key={error}><i className="fa-solid fa-triangle-exclamation"></i> {error}</li>
                            ))}
                        </ul>
                    </div>
                    <form className='upload-form' onSubmit={handleOnSubmit}>
                        <div className='up-form-input'>
                            <label>
                               
                                <input className='up-form-title-input' type="text" value={title} placeholder='Enter a title' onChange={e => setTitle(e.target.value)} />

                            </label>
                            <label>
                                <textarea type='text' placeholder='Add a description' className='up-form-description' value={description} onChange={e => setDiscription(e.target.value)} />
                            </label>
                            <div className='box'>
                                <input type='file' onChange={updateFile} accept="image/png, image/jpeg" />
                          </div>
                      
                        </div>
                   
                        <button className='up-upload-button' variant="primary" type="submit" disabled={!!errors.length}>
                            Submit
                        </button>
                    </form>
                    <div className='up-cancel'>
                    <button className='up-cancel-button' onClick={handleCancelSubmit}>
                        Cancel
                    </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UploadPage;