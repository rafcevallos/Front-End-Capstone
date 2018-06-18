import React, { Component } from 'react';
import Book from './Book';
//import './BookList.css';

export default class BookList extends Component {

    render() {
        return (
            <div className="collection-container card">
                    <div className="row">
                {
                    this.props.bookcollection.map(b =>
                    <div className="card-book col-sm-3">
                        <Book key={b.id} book={b} />)
            </div>
                )}
            </div>
            </div>
        )
    }
}