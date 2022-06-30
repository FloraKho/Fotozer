import { csrfFetch } from "./csrf";


const ADD_KEY = 'albumphotos/ADD_KEY';

const addKey = (key) => {
    return {
        type: ADD_KEY,
        key
    }
}

export const createKey = (key) => async (dispatch) => {
    const response = await csrfFetch(`/api/albumphotos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(key)
    });

    if (response.ok) {
        const newKey = await response.json();
        dispatch(addKey(newKey));
        return newKey;
    }
}

//delete
const DELETE_KEY = 'albumphotos/DELETE_KEY';

const deleteKey = (albumphotoId) => {
    return {
        type: DELETE_KEY,
        albumphotoId
    }
}

export const removeKey = (albumphotoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albumphotos/${albumphotoId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteKey(albumphotoId));
    }
}


const LOAD = 'albumphotos/LOAD';

const load = (keys) => ({
    type: LOAD,
    keys
});

export const loadAllKeys = () => async (dispatch) => {
    const response = await csrfFetch(`/api/albumphotos`);
    if (response.ok) {
        const keys = await response.json();
        dispatch(load(keys));
    }
}


const initialState = {};

const albumphotoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_KEY:
            return {
                ...state,
                [action.key.id]: action.key
            };

        case LOAD:
            newState = {};
            action.keys.forEach(key => {
                newState[key.id] = key;
            });
            return newState;

        case DELETE_KEY:
            newState = { ...state }
            delete newState[action.albumphotoId];
            return newState;

        default:
            return state;
    }
}

export default albumphotoReducer;