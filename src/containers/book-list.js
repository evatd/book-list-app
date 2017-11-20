// Same steps for containers:
// 1. Import your libraries.
// Hook up the book list to the redux store, so it gets told about changes to the activeBook piece of state.
// So, import the connect helper.
// 2. Below, connect our state to the props of this container via MapStateToProps.
// So whatever MapStateToProps function returns will be available as props to this book-list container.

// The purpose of this component is to render our book list
// Created after reducer_books.js and adding the latter to index.js
// Here we transform our BookList component into container, afforded by 'connect' from react-redux.
// Redux is aware of the state and react provides the views to display that state - otherwise disconnected.
// Use {} in import to pull off a specific property vs the whole library,
// such as, connect (the glue), selectBook (our action creator),
// bindActionCreators (will make sure that action by action creator gets passed through all reducers)
// bindActionCreators is what book-list has but the book-detail container doesn't. Selected book-list
// as an entry point for action by action creator as it's the most parent one.
// Say, book-detail is a child component and the main app component doesn't care about this specific
// state passed by action creator (although we could purpose our app component for this too).
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

// As a child component, book-list will receive and iterate through a list of books (array).
// within its renderList function which uses props.book.map to do so.
// We'll return a list and inside that li we'll show book titles via book.title.
// Also, add the renderList function in the render() below and wire it via this.renderList.
// This way, we'll render() our book titles with data from the renderList function
// Add a unique key because it's a list, will be used throughout the entire list.
// Now combine our react views and redux state to generate our app;
// We bridge this via separate library reactredux (third library alongside react and redux), already in the boiler plate.
// We inject state (redux side) into react via container.
// Container is a component that has direct access to redux.
// Containers look similar to (dumb) components, but the latter have no connection to redux which holds info about state and data.
// Add containers in your containers filer. Container=smart component=linked to redux(application state that has all of our data); antonym: dumb component
// Register onClick handler - so, whenever book title is clicked, select a book (pass book as your argument in this.props.selectBook(book)})
// SelectBook is available as props inside the container, as afforded by the MapDispatchToProps function below.
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  // 1. Create a class, export BookList extends Component: inside we'll create a render function
  // and we'll have it return a ul with a class name list-group (part of bootstrap)
  // We'll build our list and we'll pull our data - the book list - through a separate function (source) - via {this.renderList}
  // That will call a new function that we define above - RenderList
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// Here we take some state and map it as props to our container (make it available to our container)
// This function, the glue between react and redux, will take in the application state as an argument;
// returned is an odd object and whatever is returned will be available as props inside of BookList, via this.props.
// Our containers are a link between between react and redux, done via mapStateToProps function.
// We return an object with a key/property called 'books', to signify we're working with a list of books
// with the value of the state of the books: our books reducer is returning our array of books/list of books here.
// Whenever our application state changes, our container bookList will automatically rerender
// and the object in the state function will be available as props -> this.props.books.
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Here we take action creator and make it available to be called inside the action creator (make it available to container)
// Anything returned from this function will end up
// as props on the BookList container, i.e. whatever is returned from this function/whatever we pass in as first argument
// will be available as props to our container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  // i.e. this is what bindActionCreators is doing with dispatch,
  // dispatch receives the actions and passes them to all the reducers inside the application
  // This word: selectBook, the dispatch method, will call our action creator
  // So, the purpose of bindActionCreators and dispatch
  // is to take what gets returned from selectBook and make sure it flows through all of our reducers, they need this data
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// We want to export a container (smart component) not a dumb const BookList (hence deleted export default up next to BookList)
// Connect function (imported from react-redux) takes a function (mapStateToProps) and a component (BookList) and produces a container.
// Container is aware of the state that is contained by Redux.
// Also, promote Booklist from a component to a container, it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
