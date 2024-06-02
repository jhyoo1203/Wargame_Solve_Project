const initialState = {
    user: null,
}

const SET_USER = 'SET_USER';

export const setUser = data => ({ type: SET_USER, data });

export default function user(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
}