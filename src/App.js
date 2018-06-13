import React, { Component } from 'react';
import './App.css';
import BookList from './bookfeed/BookList'
import Comics from './comics'
import NavBar from './nav/NavBar'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  render() {
    return (
      <div>
        <NavBar />
        {/* <p>{this.state.selected.length}</p> */}
        <div className="store-container">
          <h1>All Comics</h1>
          <BookList result={Comics().data.results} onSelect={this.handleSelection} />
        </div>
        <div className="owned-container">
          <h1>My Comics</h1>
          <BookList result={Comics().data.results} />
        </div>
      </div>
    );
  }

  handleSelection(index) {
    this.setState({
      selected: this.state.selected.concat(index)
    });
  }

}