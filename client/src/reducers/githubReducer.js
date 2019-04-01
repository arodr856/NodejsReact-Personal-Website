import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS } from '../actions/actionTypes';

const initialState = {
    repos: [],
    isFetching: false
}

const githubReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REPOS_REQUEST:
            return {...state, isFetching: !state.isFetching};
        case FETCH_REPOS_SUCCESS:
            return {...state, isFetching: !state.isFetching, repos: action.payload };
        default:
            return state;
    }
}

export default githubReducer;