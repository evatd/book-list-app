// Our reducers get 2 arguments: the current state and action
// Reducers only ever called when action is called.
// State argument is not application state, only the state this reducer is
// responsible for: book reducer is only responsible for our books, shares its state with books.
// i.e. same state just keeps floating into our reducer over and over again =/ application state.

// Common error: when our app first boots up, there is no application state, as the app state is assembled entirely by our reducers.
// But Redux will throw some action by default for the app to start with some state - and our
// initial app state will not be of type book-selected as no book will be selected when the app first boots up (no user interaction then).
// So this.props.book.title in book-detail will expect a property there (props) but will no encounter a property and will instead get null = error.
// Need to add in a check in the render method in book-detail.
export default function(state = null, action) {
    // The case where we care about the action:
    // And we ony care about selected book case
    // and if a book is selected then return payload: the book that was selected.
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    // If the action is anything else we'll just return a state:
    // i.e. if it's not book_selected type of action;
    // our action is not a user's selecting a book.
    return state;
}