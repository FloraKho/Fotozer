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
   
    const createdAt = new Date(photo?.createdAt);
    console.log(createdAt, '......createdAt');
    // const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(createdAt);
    // console.log(date,'......date');
    const formatted = createdAt.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: '2-digit' });
    console.log(formatted, '....formatted');
    

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(currentTitle);
    const [description, setDiscription] = useState('');
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
            <div className='pd-page'>
                <div className='pd-1'>
                    <div className='pd-1-back' onClick={() => history.push('/explore')}>
                        <h3><i className="fa-solid fa-arrow-left"></i> Back to explore</h3>
                    </div>
                    <div className='pd-1-photo'>
                        <img src={photo?.imgURL} alt={photo.title} />
                    </div>

                    <div className='pd-delete-fav'>
                        {sessionUser?.id === photo?.userId ? (
                            <>
                                <DeletePhoto photo={photo} />
                            </>
                        ) : <p><i className="fa-regular fa-heart"></i> FAVORITE BUTTON HERE</p>}
                    </div>
                </div>


                <div className='pd-2'>
                    <div className='pd-2-left'>
                        <div className='pd-2-photo-edit'>
                            <div className='user-avatar'>
                                <img className='avatar' src='../photos/user-2.png' alt='user_photo' />
                                
                            </div>
                            <div>

                                <p className='pd-2-username'>{photo.User?.username}</p>
                            {sessionUser.id === photo.userId && edit ? (
                                <div>
                                <form className='pd-2-form' onSubmit={handleEditSubmit}>
                                    <div>
                                        <ul>
                                            {errors.map(error => (
                                                <li className="pd-2-error" key={error}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='pd-2-title-description'>
                                        <input className='input' type='text'
                                            value={title}
                                            required
                                            onChange={e => setTitle(e.target.value)}
                                            placeholder='Add a title'
                                        />

                                        <textarea className='textarea'
                                            type='text'
                                            value={description}
                                            onChange={e => setDiscription(e.target.value)}
                                            placeholder='Enter description'
                                        />

                                        <button className='pd-2-btn' type='submit' disabled={!!errors.length}>Save</button>

                                    </div>
                                </form>
                                </div>

                            ) : (
                                <div className='pd-2-display' onClick={handleEditState}>
                                    <div className='title-description-display'>
                                        <h3>{currentTitle}</h3>
                                                <p>{currentDescription.length ? currentDescription : 'No description here! Click to add!'}</p>
                                    </div>
                                    <div className='pd-2-edit-btn'>
                                         <i className="fa-solid fa-pen-to-square"></i>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className='pd-2-right'>
                        <div className='pd-2-count'>
                            <div className='pd-2-faves'>
                                <p>10</p>
                                <p>faves</p>
                            </div>
                            <div className='pd-2-comments'>
                                <p>3</p>
                                <p>comments</p>
                            </div>
                        </div>
                        <div className='pd-2-date'>
                            <p>Taken on {formatted}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoDetailPage;