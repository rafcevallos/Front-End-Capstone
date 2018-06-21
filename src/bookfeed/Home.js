import React, { Component } from "react"
import "./Home.css"
import BookList from './BookList'
// import FriendList from "../friends/FriendList";

export default class Home extends Component {

    // Set Initial State
    state = {
        bookcollection: [], /* Will hold all the individual books the current user has */
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /* this will be a DELETE JSON method to remove book from user's collection */
    deleteBookFromDB = function (id) {
        fetch(`http://localhost:8088/bookcollection/${id}`, {
            method: "DELETE"
        }).then(data => {
            // this.myCollection();
        })
    }
    // }.bind(this)

    /* Query DB to get all books owned by the active user */
    /* Moved fetch into a function so the page can "refresh" once the user deletes a book - IN THEORY the user should see the book removed immediately */
    myCollection = function () {
        /* Get current user ID */
        const currentUser = JSON.parse(localStorage.getItem("userId"))
        fetch(`http://localhost:8088/bookcollection?userId=${currentUser}&_sort=id&_order=asc&_expand=book`)
            .then(r => r.json())
            .then(bookcollection => {
                this.setState({
                    bookcollection: bookcollection
                })
            })
    }.bind(this)


    // componentDidMount() {
    // }

    render() {
        return (
            <div className="collection-results card-deck">
                {/* invoke the myCollection function to display items in user's collection */}
                {this.myCollection()}
                <h3 className="collection-header">My Collection</h3>
                <div>
                    <BookList bookcollection={this.state.bookcollection} activeUser={this.props.activeUser} deleteBookFromDB={this.deleteBookFromDB} />
                </div>
            </div>
        )
    }
}