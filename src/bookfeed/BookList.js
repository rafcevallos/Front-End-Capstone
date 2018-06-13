import React, { Component } from 'react';
import Book from './Book';
//import './BookList.css';

export default class BookList extends Component {

    render() {
        return (
            <div>
                {this.props.result.map((comic, index) => <Book comic={comic} key={index} onSelect={this.props.onSelect} />)}
            </div>
        )
    }
}