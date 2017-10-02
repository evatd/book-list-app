// Same steps for containers:
// 1. Import your libraries.
// Hook up the book detail to the redux store, so it gets told about changes to the activeBook piece of state.
// So, import the connect helper.
// 2. Below, connect our state to the props of this container via MapStateToProps.
// So whatever MapStateToProps function returns will be available as props to this book-detail container.
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Because book details are available as props (as afforded by MapStateToProps)
// we can make use of book details and print out book titles in h3 below.
// Add a check in the render method: if the props don't exist yet (e.g. when the first boots up, no book will have been selected yet),
// return a prompt: "select a book", to prompt the user to choose a book.
// So, once the user clicks on a book, it'll update the app state, causing our container to rerender
// because we hooked this container to redux.
// When it rerenders, it will have this.props defined and it will successfully print the book title (i.e. what is defined in the return method: "Details for...")
class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// Define our helper function, has the argument of our application state
// So we map our application state to the props of this particular container
// Possible because whatever gets returned  will show up as props
// Our prop is book
// Also, we reference activeBook because our active_book reducer is creating the piece of state.
function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

// Add export here and then delete the export default next to class BookDetails (above, initially noted there)
// Because we want to export a smart component/container BookDetail (wired up to redux, aware of the state)
// not the dumb BookList component (dumb at the stage above, pre-MapStateToProps which makes active_book available as props
// can be passed around, link to redux (which has info about application state)
export default connect(mapStateToProps)(BookDetail);