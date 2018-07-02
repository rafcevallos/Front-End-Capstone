import React, { Component } from "react";
import Book from './Book'
// import "./Wishlist.css";

export default class Wishlist extends Component {
    // Set initial state
    state = {
        wishlist: [], /* This will hold all of the books in WISHLIST from bagboard.json once they are fetched */
    }

    /* this will be a DELETE JSON method to remove book from user's WISHLIST */
    removeWishlistBookDB = function (id) {
        fetch(`http://localhost:8088/wishlist/${id}`, {
            method: "DELETE"
        }).then(data => {
        })
    }

    /* Query DB to get all books in WISHLIST for the active user */
    /* Moved fetch into a function so the page can "refresh" once the user ADDS a book to WISHLIST */
    myWishlist = function () {
        /* Get current user ID */
        const currentUser = JSON.parse(localStorage.getItem("userId"))
        fetch(`http://localhost:8088/wishlist?userId=${currentUser}&_sort=id&_order=asc&_expand=book`)
            .then(r => r.json())
            .then(wishlist => {
                this.setState({
                    wishlist: wishlist
                })
            })
    }.bind(this)

    render() {
        return (
            <div className="wishlist-results card-deck">
                {/* Invoke myWishlist function to display items in user's wishlist */}
                {this.myWishlist()}
                <h3 className="wishlist-header">My Wishlist</h3>
                <div className="wishlist-container card">
                    <div className="row">
                        {
                            this.state.wishlist.map(b => /* map over WISHLIST ARRAY */
                                <div className="card-book col-sm-3" key={b.id}>
                                    <Book key={b.id} book={b} deleteBook={this.deleteBook} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}