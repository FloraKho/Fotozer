import { csrfFetch } from "./csrf";

const LOAD = 'explore/LOAD';

const load = (images) => ({
    type: LOAD,
    images
});

export const loadAllImg = () => async (dispatch) => {
    const response = await csrfFetch(`/api/explore`);
    if (response.ok) {
        const images = await response.json();
        dispatch(load(images));
    }
}

const initialState = { entries: [] };

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return { ...state, entries: [...action.images] };
        default:
            return state;
    }
}

export default imageReducer;