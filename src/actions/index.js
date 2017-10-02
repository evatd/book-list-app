// Scenario for the app: user sees a list books - when they click on a book from the list
// they should be able to see more info about the book (we need action creator for this)

// Export this function so we can use it in other components
// We create an action which is just a function that allows to select books
// = book is an object with a title
// We should call this action creator whenever a user clicks on a book: make sure that the action that returns from it gets
// through all of our reducers: i.e. this action creator should be wired up to redux.

// Now we want to enhance our action creator and add an actual action, delete the console.log
export function selectBook(book) {
   // Just a check, can remove now: console.log('A book has been selected:', book.title);
    // selectBook is an action creator, it needs to return an action.
    // an object with a type property.
    // Every action must have a type that describes the action (i.e. the user selecting a book; write in upper case)
    // and sometimes a payload (i.e.a piece of data that describes the action that is being undertaken).
    return {
       type: 'BOOK_SELECTED',
        payload: book
    };
}

