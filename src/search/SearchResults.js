import React, { Component } from "react"
import "./SearchResults.css"
import Avatar from "../images/avatar.png"
import "../bookfeed/Book.css"


export default class SearchResults extends Component {

    // Set initial state
    state = {
        books: [],
        users: [],
        collection: [],
        wishlist: []
    }

    /*
        By putting the API search code in `componentDidMount()` you will note
        that when you perform a search, and are viewing the results, you can't
        search again without going back to the main view.

        How might you solve this issue?
    */
    componentDidMount() {
        const newState = {}
        fetch(`http://localhost:8088/data/results?message_like=${encodeURI(this.props.terms)}&_expand=user`)
            .then(r => r.json())
            .then(books => {
                newState.books = books
                return fetch(`http://localhost:8088/users?q=${encodeURI(this.props.terms)}`)
            })
            .then(r => r.json())
            .then(users => {
                newState.users = users
                this.setState(newState)
            })
            .then(r => r.json())
            .then()
    }

    render() {
        return (
            <div className="searchResults">
                <h1>Search Results</h1>

                {
                    this.state.books.map(p =>
                        <div className="card post" key={p.id}>
                            <div className="card-body">
                                <h5 className="card-title">By {p.user.email}</h5>
                                <p className="card-text">
                                    {p.message}
                                </p>
                                <a href="#" className="btn btn-outline-success">Like</a>
                            </div>
                        </div>
                    )
                }

                {
                    this.state.users.map(u =>
                        <div className="card post" key={u.id}>
                            <img className="card-img-top avatar" src={Avatar} alt="Generic person image" />
                            <div className="card-body">
                                <h5 className="card-title">{u.email}</h5>
                                <a href="#" className="btn btn-outline-success">View profile</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
