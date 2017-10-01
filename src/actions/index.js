// Export this function so we can use it in other components
// We create an action which is just a function that allows to select books
// = books are objects with a title
// We should call this action creator whenever a user clicks on a book: make sure that the action that returns from it gets
// through all of our reducers: i.e. this action creator should be wired up to redux
export function selectBook(book) {
   console.log('a book has been selected:', book.title)
}

