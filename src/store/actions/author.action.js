import getAuthorData from '../../services/author.service';
import { FETCH_AUTHOR, FETCHING_AUTHOR } from '../types';

export function fetchAuthor(id) {
  return async function fetchBooks(dispatch) {
    dispatch({ type: FETCHING_AUTHOR });
    const response = await getAuthorData(id);
    dispatch({ type: FETCH_AUTHOR, payload: response.data.docs });
  };
}
