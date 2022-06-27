import { csrfFetch } from "./csrf";

const ADD_COMMENT = 'comments/ADD_COMMENT';
const GET_COMMENTS = 'comments/GET_COMMENTS';
const EDIT_COMMENT = 'comments/EDIT_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';

//action creators
//create
const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

//read
const getComments = (comments) => {
    return {
        type: GET_COMMENTS,
        comments
    }
}

//update
const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}


const deleteComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

//thunk
//create
export const createComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment),
    });

    if (response.ok) {
        const newComment = await response.json();
        dispatch(addComment(newComment));
        return newComment;
    }
}


//read
export const readComments = (photoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/photos/${photoId}`);
    if (response.ok) {
        const comments = await response.json();
        dispatch(getComments(comments));
    }
}


//update
export const updateComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const newComment = await response.json();
        dispatch(editComment(newComment));
        return newComment;
    }
}

//delete
export const removeComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteComment(commentId));
    }
}


//Reducer

const initialState = {};

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            };

        case GET_COMMENTS:
            newState = {};
            action.comments.forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;

        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            };

        case DELETE_COMMENT:
            newState = { ...state }
            delete newState[action.commentId];
            return newState;

        default:
            return state;
    }
}

export default commentReducer;
