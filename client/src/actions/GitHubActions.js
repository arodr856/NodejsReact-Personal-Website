import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS } from './actionTypes';

export const fetchRepos = () => dispatch => {
    dispatch({type: FETCH_REPOS_REQUEST, payload: 'action'})
    fetch('/api/github/repos')
        .then(response => response.json())
        .then(json => {
            dispatch({type: FETCH_REPOS_SUCCESS, payload: json});
        })
}