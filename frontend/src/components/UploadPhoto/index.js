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
    // const [previewSrc, setPreviewSrc] = useState('')
    // const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDiscription] = useState('');
    const [imgURL, setImgURL] = useState('');


    useEffect(() => {
        const errors = [];
        function isValidURL(str) {
            var pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i');
            return !!pattern.test(str);
        }
        
        if (!isValidURL(imgURL)) {
            errors.push("Please enter a valid image url");
        }

        if (title.length > 50) {
            errors.push("Title must be within 50 characters");
        } 
        else if (!title.length){
            errors.push("Please enter a title");
        }
        setErrors(errors);
    }, [title, description, imgURL])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const photoInfo = {
            title,
            description,
            imgURL,
            userId: userId
        }
        const photo = await dispatch(uploadPhoto(photoInfo));
        setErrors([]);
        setTitle('');
        setDiscription('');
        setImgURL('');
        history.push(`/photos/${photo.id}`);
    }

    const handleCancelSubmit = async (e) => {
        e.preventDefault();
        setTitle('');
        setDiscription('');
        setImgURL('');
    }

    return (
        <div className='uploadImg-page'>
            <div className='uploadImg-center'>
                <div className='back-to-user-photostream'>
                    <button onClick={() => history.goBack()}><i className="fa-solid fa-circle-arrow-left"></i> Back</button>
                </div>
                <div className="errors">
                    <ul>
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
                <form className='upload-form' onSubmit={handleOnSubmit}>

                    <div className='form-input'>
                        <label>
                            <input type="text" placeholder="" value={title} onChange={e => setTitle(e.target.value)} />
                            <span className="placeholder">Enter Title</span>
                        </label>
                        <label>
                            <textarea type='text' placeholder='' value={description} onChange={e => setDiscription(e.target.value)} />
                            <span>Enter description</span>
                        </label>
                        <label>
                            <textarea required type='text' placeholder='' value={imgURL} onChange={(e) => setImgURL(e.target.value)} />
                            <span>Enter Image URL</span>
                        </label>
                    </div>
                    {/* {previewSrc ? (
                        isPreviewAvailable ? (
                            <div className="image-preview">
                                <img className="preview-image" src={previewSrc} alt="Preview" />
                            </div>
                        ) : (
                            <div className="preview-message">
                                <p>No preview available for this file</p>
                            </div>
                        )
                    ) : (
                        <div className="preview-message">
                            <p>Image preview will be shown here after selection</p>
                        </div>
                    )} */}
                    <div className='uploadImg-button'></div>
                    <button variant="primary" type="submit" disabled={!!errors.length}>
                        Submit
                    </button>
                </form>
                <button onClick={handleCancelSubmit}>
                    Cancel
                </button>
            </div>
        </div>

    )
}

export default UploadPage;