import axios from "axios"

export const getCharacters = () => dispatch => {
  dispatch({type: 'FETCH_CHARACTER_START'});
  axios
    .get('https://breakingbadapi.com/api/characters')
    .then(res => {
      console.log(res);
      dispatch({type: 'FETCH_CHARACTER_SUCCESS', payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type: 'FETCH_CHARACTER_FALURE', payload: err.response})
    })
}