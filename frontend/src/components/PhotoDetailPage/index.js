import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { readPhoto, updatePhoto } from '../../store/photos';
import DeletePhoto from './DeletePhoto';
import './PhotoDetailPage.css';


function PhotoDetailPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const photo = useSelector((state) => state.photos[photoId]);

    const currentTitle = photo?.title;
    const currentDescription = photo?.description;

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(currentTitle);
    const [description, setDiscription] = useState(currentDescription);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        history.push(`/photos/${photoId}`);
    }, [history, photoId]);

    useEffect(() => {
        dispatch(readPhoto(photoId));
    }, [dispatch, photoId]);

    useEffect(() => {
        const errors = [];
        if (title?.length > 50) {
            errors.push("Title must be within 50 characters");
        }
        setErrors(errors);
    }, [title]);


    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const newPhotoInfo = {
            id: photoId,
            title,
            description,
            userId: sessionUser.id
        }
        dispatch(updatePhoto(newPhotoInfo));
        setErrors([]);
        setEdit(false);
        history.push(`/photos/${photoId}`);
    }

    const handleEditState = async () => {
        setTitle(currentTitle);
        setDiscription(currentDescription);
        setEdit(true);
    }


    if (!sessionUser || !photo) return (
        <p className='loading'><i className="fa-solid fa-spinner"></i> Loading...</p>
    )

    return (
        <>
            <div className='photodetailpage'>
                <div className='photodetail-container'>
                    <div className='back' onClick={() => history.push('/explore')}>
                        <h3><i className="fa-solid fa-arrow-left"></i> Back to explore</h3>
                    </div>
                    <div className='single-photo'>
                        <img src={photo?.imgURL} alt={photo.title} />
                    </div>

                    <div className='photodetail-delete-fav'>
                        {sessionUser?.id === photo?.userId ? (
                            <>
                                <DeletePhoto photo={photo} />
                            </>
                        ) : <p><i className="fa-regular fa-heart"></i> FAVORITE BUTTON HERE</p>}
                    </div>
                </div>


                <div className='photodetail-bottom'>
                    <div className='photodetail-left'>
                        <div className='photodetail-edit'>
                            <img className='avatar' src='../photos/user-1.png' alt='user_photo'/> 
                            {sessionUser.id === photo.userId && edit ? (
                                <form onSubmit={handleEditSubmit}>
                                    <div className="errors">
                                        <ul>
                                            {errors.map(error => (
                                                <li key={error}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <input type='text'
                                            value={title}
                                            required
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                        <textarea
                                            type='text'
                                            value={description}
                                            onChange={e => setDiscription(e.target.value)}
                                            placeholder='Enter description'

                                        />
                                        <button type='submit' disabled={!!errors.length}>Save</button>
                                    </div>
                                </form>
                            ) : (
                                <div onClick={handleEditState}>
                                    <p>{currentTitle}</p>
                                    <p>{currentDescription}</p>
                                </div>
                            )}
                        </div>
                        <div className='photodetail-add-comment'>
                            <p>Comment Component here</p>
                        </div>
                    </div>
                    <div className='photodetail-right'>
                        <div>
                            <p>fav.length here</p>
                            <p>comment.length here</p>
                        </div>
                        <div>
                            <p>Albums put here if we have</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoDetailPage;