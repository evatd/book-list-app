// Below are two imports at once: React and Component from 'react;
// Import BookList and add it to the render function below, to render it inside the app.
// Then make sure BookList has a link to Redux because we want our app to showcase a list of books.
// So, go to book-list.js and import 'react-redux' library
// Also, import individual containers, to make sure they get rendered ,
// + add the components to the render() method below.
import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

// We render BookList which is a container/smart component (React side), bonded to the application state (help by Redux)
// When we saw the list in the browser, behind the scenes:
// Redux generated a state object that contained our books and mapped that state
// as props to our component.
// Because the state was updated through our reducer, our component rerendered that list of books.
// Whenever the application state changes, the application will rerender as well.
export default class App extends Component {
  render() {
    return (
        <div>
          <BookList />
          <BookDetail/>
      </div>
    );
  }
}
