import React, { Component } from 'react';
import Book from './Book';
//import './BookList.css';

export default class BookList extends Component {

    deleteBook = function (id) {
        // console.log(id)
        this.props.deleteBookFromDB(id)
    }.bind(this)

    render() {
        return (
            <div className="collection-container card">
                <div className="row">
                    {
                        this.props.bookcollection.map(b =>
                            <div className="card-book col-sm-3" key={b.id}>
                                <Book key={b.id} book={b} deleteBook={this.deleteBook} />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}