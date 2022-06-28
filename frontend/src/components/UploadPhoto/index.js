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
    // const [imgURL, setImgURL] = useState('');
    const [image, setImage] = useState(null);


    useEffect(() => {
        const errors = [];
        // function isValidURL(str) {
        //     var pattern = new RegExp('^(https?:\\/\\/)?' +
        //         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        //         '((\\d{1,3}\\.){3}\\d{1,3}))' +
        //         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        //         '(\\?[;&a-z\\d%_.~+=-]*)?' +
        //         '(\\#[-a-z\\d_]*)?$', 'i');
        //     return !!pattern.test(str);
        // }

        // if (!isValidURL(imgURL)) {
        //     errors.push("Please enter a valid image url");
        // }
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
        // }, [title, description, imgURL])
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
                    <button className='up-back-btn' onClick={() => history.goBack()}><i className="fa-solid fa-circle-arrow-left"></i> Back</button>
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
                            {/* <label htmlFor="upload-input">
                                <img
                                    src='../photos/folder.png'
                                    draggable={"false"}
                                    alt="placeholder"
                                    style={{ width: 100, height: 100 }}
                                />
                                <p style={{ color: "#444" }}>Click to upload image</p>
                            </label> */}
                                {/* <textarea required type='text' placeholder='' value={imgURL} onChange={(e) => setImgURL(e.target.value)} />
                            <span>Enter Image URL</span> */}
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