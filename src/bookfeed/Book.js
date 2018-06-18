import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {

    render() {
        return (
            // <div className="card-book">
            // <div className="comic-thumbnail-container">
            // </div>

            <div className="card-body">
                <img className="card-img-top" src={`${this.props.book.book.thumbnail.path}.${this.props.book.book.thumbnail.extension}`} />
                <h6 className="card-title">{this.props.book.book.title}</h6>
                <p className="card-text">
                    <p>ISBN: {this.props.book.book.isbn}</p>
                    <p>Pages: {this.props.book.book.pageCount}</p>
                    <p>Date: {this.props.book.book.date}</p>
                    <p>Price: ${this.props.book.book.prices[0].price}</p>
                    <p className="summary-text">Description: {this.props.book.book.description}</p>
                </p>
                <div className="button-group">
                    <button className="btn btn-primary btn-sm btn-block" type="button" data-toggle="collapse" data-target="#content" aria-expanded="false" aria-controls="content">
                        Description
                    </button>
                    <button className="btn btn-success btn-sm btn-block">Remove From Collection</button>
                    <button className="btn btn-info btn-sm btn-block">Add to Wishlist</button>
                    <button className="btn btn-warning btn-sm btn-block">Add to Trade</button>
                    {/* <a href="#" className="btn btn-outline-success">Like</a> */}
                </div>
            </div>
        )
    }
}