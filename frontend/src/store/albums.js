import { csrfFetch } from "./csrf";

//create
const ADD_ALBUM = 'albums/ADD_ALBUM';

const addAlbum = (album) => {
    return {
        type: ADD_ALBUM,
        album
    }
}

export const createAlbum = (album) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
    });

    if(response.ok){
        const newAlbum = await response.json();
        dispatch(addAlbum(newAlbum));
        return newAlbum;
    }
}

//delete
const DELETE_ALBUM = 'albums/DELETE_ALBUM';

const deleteAlbum = (albumId) => {
    return {
        type: DELETE_ALBUM,
        albumId
    }
}

export const removeAlbum = (albumId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteAlbum(albumId));
    }
}

//update
const EDIT_ALBUM = 'albums/EDIT_ALBUM';

const editAlbum = (album) => {
    return {
        type: EDIT_ALBUM,
        album
    }
}

export const updateAlbum = (album) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${album.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(album)
    })
    if (response.ok) {
        const newAlbum = await response.json();
        dispatch(editAlbum(newAlbum));
        return newAlbum;
    }
}

const GET_ALL_ALBUMS = 'albums/GET_ALL_ALBUMS';

const getAllAlbums = (albums) => {
    return {
        type: GET_ALL_ALBUMS,
        albums
    }
}

export const readUserAlbums = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/albums`);
    if (response.ok) {
        const albums = await response.json();
        dispatch(getAllAlbums(albums));
    }
}



//reducer

const initialState = {};

const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_ALBUM:
            return {
                ...state,
                [action.photo.id]: action.photo
            };

        case GET_ALL_ALBUMS:
            newState = {};
            action.albums.forEach(album => {
                newState[album.id] = album;
            });
            return newState;

        case EDIT_ALBUM:
            return {
                ...state,
                [action.album.id]: action.album
            };

        case DELETE_ALBUM:
            newState = { ...state }
            delete newState[action.albumId];
            return newState;

        default:
            return state;
    }
}

export default albumReducer;