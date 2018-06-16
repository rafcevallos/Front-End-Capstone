import React, { Component } from 'react';
import Book from './Book';
//import './BookList.css';

export default class BookList extends Component {

    render() {
        return (
            <div className="bookList">
                <h1 className="bookList_header">My Collection</h1>
                {
                    this.props.collection.bookId.map(c => <Book key={c.id} collection={c} />)
                }
            </div>
        )
    }
}