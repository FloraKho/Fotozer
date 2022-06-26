import { csrfFetch } from "./csrf";

const ADD_PHOTO = 'photos/ADD_PHOTO';
const GET_PHOTO = 'photos/GET_PHOTO';
const GET_ALL_PHOTOS = 'photos/GET_ALL_PHOTOS';
const EDIT_PHOTO = 'photos/EDIT_PHOTO';
const DELETE_PHOTO = 'photos/DELETE_PHOTO';


//action creators
const addPhoto = (photo) => {
    return {
        type: ADD_PHOTO,
        photo
    }
}

const getPhoto = (photo) => {
    return {
        type: GET_PHOTO,
        photo
    }
}

const getAllPhotos = (photos) => {
    return {
        type: GET_ALL_PHOTOS,
        photos
    }
}

const editPhoto = (photo) => {
    return {
        type: EDIT_PHOTO,
        photo
    }
}

const deletePhoto = (photoId) => {
    return {
        type: DELETE_PHOTO,
        photoId
    }
}

//thunk
//create
export const uploadPhoto = (photo) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photo),
    });

    if (response.ok) {
        const newPhoto = await response.json();
        dispatch(addPhoto(newPhoto));
        return newPhoto;
    }
}

//read
export const readPhoto = (photoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos/${photoId}`);

    if (response.ok) {
        const photo = await response.json();
        dispatch(getPhoto(photo));
    }
}

//read
export const readAllPhotos = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/photos`);
    if (response.ok) {
        const photos = await response.json();
        dispatch(getAllPhotos(photos));
    }
}

//update
export const updatePhoto = (photo) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos/${photo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(photo)
    })
    if (response.ok) {
        const newPhotoInfo = await response.json();
        dispatch(editPhoto(newPhotoInfo));
        return newPhotoInfo;
    }
}

//delete
export const removePhoto = (photoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos/${photoId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deletePhoto(photoId));
        return photoId;
    }
}


//reducer
const initialState = {};

const photoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state,
                [action.photo.id]: action.photo
            };

        case GET_PHOTO:
            newState = { ...state };
            newState[action.photo.id] = action.photo;
            return newState;

        case GET_ALL_PHOTOS:
            newState = {};
            action.photos.forEach(photo => {
                newState[photo.id] = photo;
            });
            return { ...newState };

        case EDIT_PHOTO:
            return {
                ...state,
                [action.photo.id]: action.photo
            };

        case DELETE_PHOTO:
            newState = { ...state }
            delete newState[action.photoId];
            return newState;

        default:
            return state;
    }
}

export default photoReducer;