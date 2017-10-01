import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Here we define that our state will equal a key called books and its value will be an array of books
const rootReducer = combineReducers({
  books:BooksReducer
});

export default rootReducer;
