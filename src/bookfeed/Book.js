import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
    render() {
        return (
            <div className="card post">
                <div className="comic-thumbnail-container">
                    <img className="comic-thumbnail" src={`${this.props.books.thumbnail.path}.${this.props.book.thumbnail.extension}`} />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{this.props.books.title}</h3>
                    <p className="card-text">
                        <p>ISBN: {this.props.books.isbn}</p>
                        <p>Pages: {this.props.books.pageCount}</p>
                        <p>Date: {this.props.books.date}</p>
                        <p>Price: ${this.props.books.prices[0].price}</p>
                        <p>Description: {this.props.books.description}</p>
                    </p>
                    {/* <a href="#" className="btn btn-outline-success">Like</a> */}
                </div>
            </div>
        )
    }
}