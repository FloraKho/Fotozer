import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readPhoto, updatePhoto } from '../../store/photos';
import DeletePhoto from './DeletePhoto';

function PhotoDetailPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const photo = useSelector((state) => state.photos[id]);

    const currentTitle = photo?.title;
    const currentDescription = photo?.description;

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(currentTitle);
    const [description, setDiscription] = useState(currentDescription);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (title?.length > 50) {
            errors.push("Title must be within 50 characters");
        }
        setErrors(errors);
    }, [title]);

    useEffect(() => {
        history.push(`/photos/${id}`);
    }, [history, id]);

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const newPhotoInfo = {
            id: id,
            title,
            description,
            userId: sessionUser.id
        }
        dispatch(updatePhoto(newPhotoInfo));
        setErrors([]);
        setEdit(false);
        history.push(`/photos/${id}`);
    }

    const handleEditState = async () => {
        setTitle(currentTitle);
        setDiscription(currentDescription);
        setEdit(true);
    }

    useEffect(() => {
        if(id){
            dispatch(readPhoto(id));
        }
       
    }, [dispatch, id]);


    if (!photo) {
        return null;
    }

    return (
        <>
            <div className='photodetailpage'>
                <div className='photodetail-container'>
                    <img src={photo?.imgURL} alt={photo.title} />
                </div>
                <div className='photodetail-delete-fav'>
                    {sessionUser.id === photo?.userId ? (
                        <>
                            <DeletePhoto photo={photo} />
                        </>
                    ) : <p><i class="fa-regular fa-heart"></i> FAVORITE BUTTON HERE</p>}
                </div>
                <div className='photodetail-edit-container'>
                    <div>
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
                    <div>
                        <p>fav.length here</p>
                        <p>comment.length here</p>
                    </div>
                    <div className='comments-part'>
                       <p>Comment Component here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoDetailPage;