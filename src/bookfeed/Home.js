import React, { Component } from "react"
import "./Home.css"
import BookList from './BookList'
import FriendList from "../friends/FriendList";

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

    /*deleteBook = function
    this will be a DELETE JSON method */

    /* Query DB to get all books owned by the active user */
    /* Try moving the component did mount into a function so the page can refresh once the user deletes a book */
    componentDidMount() {
        const currentUser = JSON.parse(localStorage.getItem("userId")) /* Get current user ID */
        console.log(currentUser)
        fetch(`http://localhost:8088/bookcollection?userId=${currentUser}&_sort=id&_order=asc&_expand=book`)
            .then(r => r.json())
            .then(bookcollection => {
                this.setState({
                    bookcollection: bookcollection
                })
            })
        console.log(this.state)
    }

    render() {
        return (
            <div className="collection-results card-deck">
                <h1 className="collection-header">My Collection</h1>
                {/* <div className="collection-container card">
                    <div className="row"> */}
                <div>
                    <BookList bookcollection={this.state.bookcollection} activeUser={this.props.activeUser} />
                </div>
            </div>
            // </div>
            // </div>
        )
    }
}