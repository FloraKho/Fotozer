import { csrfFetch } from "./csrf";

const ADD_FAVE = 'favorites/ADD_FAVE';
const GET_PHOTO_FAVES = 'favorites/GET_PHOTO_FAVES';
const GET_USER_FAVES = 'favorites/GET_USER_FAVES';
// const GET_ALL_FAVES = 'favorites/GET_ALL_FAVES';
const DELETE_FAVE = 'favorites/DELETE_FAVE';

//action creator

const addFave = (favorite) => {
    return {
        type: ADD_FAVE,
        favorite
    }
}

const getPhotoFaves = (favorites) => {
    return {
        type: GET_PHOTO_FAVES,
        favorites
    }
}

const getUserFaves = (favorites) => {
    return {
        type: GET_USER_FAVES,
        favorites
    }
}


// const getAllFaves = (favorites) => {
//     return {
//         type: GET_ALL_FAVES,
//         favorites
//     }
// }

const deleteFave = (favoriteId) => {
    return {
        type: DELETE_FAVE,
        favoriteId
    }
}


//thunk
//create
export const createFave = (favorite) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(favorite),
    });

    if (response.ok) {
        const newFave = await response.json();
        dispatch(addFave(newFave));
        return newFave;
    }
}

export const readUserFaves = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/favorites`);
    if (response.ok) {
        const faves = await response.json();
        dispatch(getUserFaves(faves));
    }
}

export const readPhotoFaves = (photoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites/photos/${photoId}`);

    if (response.ok) {
        const faves = await response.json();
        dispatch(getPhotoFaves(faves));
    }
}

// export const readAllFaves = () => async (dispatch) => {
//     const response = await csrfFetch(`/api/favorites`);
//     if(response.ok){
//         const faves = await response.json();
//         dispatch(getAllFaves(faves));
//     }
// }



export const removeComment = (favoriteId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${favoriteId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteFave(favoriteId));
    }
}

//reducer

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_FAVE: 
        return {
            ...state,
            [action.favorite.id]: action.favorite
        };
        case getUserFaves: 
            newState = {};
            action.favorites.forEach(favorite => {
                newState[favorite.id] = favorite;
            });
            return newState;
        case getPhotoFaves:
            newState = {};
            action.favorites.forEach(favorite => {
                newState[favorite.id] = favorite;
            });
            return newState;

        case DELETE_FAVE:
            newState = { ...state }
            delete newState[action.favoriteId];
            return newState;

        default:
            return state;
    }
}


export default favoriteReducer;