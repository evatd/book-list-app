// Our application state is formed by our reducers
// They are in charge of changing our application state over time and they do that through the use of actions.
// Action flows through all the reducers in our app and each reducer has the option to return a different piece of state,
// based on the type of action it received ( i.e. action here received type 'BOOKS_SELECTED' (in index.js); action flows when a book is selected)

// But first, import our reducers
import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

// For each key ('books' one covers books hence the key name books), we assign a reducer.
// book: assigned a book reducer and its value will be an array of books.
// activeBook: we define the same.
// Any key to the object that we provide to our combined reducers ends up as key on our global state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
