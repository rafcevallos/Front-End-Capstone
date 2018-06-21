import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {

    delete = function () {
        // console.log(this.props.bookcollection)
        this.props.deleteBook(this.props.book.id)
    }.bind(this)

    render() {
        return (
            <div className="card-body">
                <img className="card-img-top" src={`${this.props.book.book.thumbnail.path}.${this.props.book.book.thumbnail.extension}`} />
                <h6 className="card-title">{this.props.book.book.title}</h6>
                <section className="card-text">
                    <p>ISBN: {this.props.book.book.isbn}</p>
                    <p>Pages: {this.props.book.book.pageCount}</p>
                    <p>Date: {this.props.book.book.date}</p>
                    <p>Price: ${this.props.book.book.prices[0].price}</p>
                    <p className="summary-text">Description: {this.props.book.book.description}</p>
                </section>
                <div className="button-group">
                    <button className="btn btn-primary btn-sm btn-block"> {/* would be nice to have the book info be in some kind of panel/collapse */}
                        Description
                    </button>
                    <button className="btn btn-success btn-sm btn-block" onClick={this.delete}>Remove From Collection</button>
                    <button className="btn btn-info btn-sm btn-block">Add to Wishlist</button>
                    <button className="btn btn-warning btn-sm btn-block">Add to Trade</button>
                    {/* <a href="#" className="btn btn-outline-success">Like</a> */}
                </div>
            </div>
        )
    }
}