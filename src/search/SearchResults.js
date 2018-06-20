import React, { Component } from "react"
import "./SearchResults.css"
import Avatar from "../images/avatar.png"
import "../bookfeed/Book.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default class SearchResults extends Component {
    // Set initial state
    state = {
        books: [], /* This will hold all of the books from bagboard.json once they are fetched */
        // userId: this.userId,
        // wishlist: [],
    }

    /* componentDidMount() does not allow multiple searches to work due to it only making the fetch once which makes the user have to reload the page.  Turning the fetch into a function allows it to be re-used indefinitely when the page is rendered. */
    Search = function () {
        fetch(`http://localhost:8088/books?description_like=${encodeURI(this.props.terms)}`)
            .then(r => r.json())
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }.bind(this)

    // handleFieldChange = (evt) => {
    //     const stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)
    // }

    addBook = function(event) {
        fetch("http://localhost:8088/bookcollection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: JSON.parse(localStorage.getItem("userId")),
                bookId: +event.target.id /* + converts this to a number */
            })
        })
        // console.log(event.target.value)
    }.bind(this)

    render() {
        return (
            <div className="searchResults card-deck">
                {/* Invoke Search Function */}
                {this.Search()}
                <h3 className="search-header">Search Results</h3>
                <div className="search-container card">
                    <div className="row">
                        {
                            this.state.books.map(book => /* map over BOOKS ARRAY */
                                <div className="card-book col-sm-3" key={book.id}>
                                    <div className="card-body">
                                        <img className="card-img-top" src={`${book.thumbnail.path}.${book.thumbnail.extension}`} />
                                        <h6 className="card-title">{book.title}</h6>
                                        <p>Date: {book.date}</p>
                                        <p>Pages: {book.pageCount}</p>
                                        <p>Price: ${book.prices[0].price}</p>
                                        <p className="summary-text">Summary: {book.description}</p>
                                        {/* <p>Summary: {book.description.substring(0,250)}</p> */}
                                        <div className="button-group">
                                            <button className="btn btn-primary btn-sm btn-block" type="button" data-toggle="collapse" data-target="#content" aria-expanded="false" aria-controls="content">
                                                Description
                                            </button>
                                            {/* work on clicking and adding to collection */}
                                            <button className="btn btn-success btn-sm btn-block" id={book.id} onClick={this.addBook}>Add to Collection</button>
                                            <button className="btn btn-info btn-sm btn-block">Add to Wishlist</button>
                                            <button className="btn btn-warning btn-sm btn-block">Add to Trade</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

/* I can use this to display users if I get Friends component working */
/* {
                                this.state.users.map(user =>
                                    <div className="card post" key={user.id}>
                                        <img className="card-img-top avatar" src={Avatar} alt="Generic person image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{user.email}</h5>
                                            <a href="#" className="btn btn-outline-success">View profile</a>
                                        </div>
                                    </div>
                                )
                            } */