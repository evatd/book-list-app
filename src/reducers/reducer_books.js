// 1. Define our reducer
// Our reducer is just a function and it returns a piece of application state: a list of books
// Need to export our function via export default,and any other file inside our project can import this file and it will receive the list of books=reducer
// 2. wire our reducer: add it to index.js, const rootReducer = combineReducers
export default function() {
  return [
    { title: "JavaScript: the Good Parts", pages: 101 },
    { title: "Happy Potter", pages: 50 },
    { title: "Eloquent JS", pages: 40 },
    { title: "Americanah", pages: 206 }
  ];
}
