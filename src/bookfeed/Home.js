import React, { Component } from "react"
import "./Home.css"
import BookList from './BookList'
import FriendList from "../friends/FriendList";

export default class Home extends Component {

    state = {
        bookcollection: [],
        book: [],
        collection: []
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
// will need 3 fetches.   One for bookcollection, another for the collection, and another for an indivdual book
    componentDidMount() {
        fetch(`http://localhost:8088/collection?userId=${this.props.activeUser}`)
            .then(r => r.json())
            .then(collection => this.setState({ collection: collection }))
            return
    }

    render() {
        return (
            // if collectionId and collection.id match  AND bookid and book match, then render
            <div className="container-full">
                <div className="row">
                    {/* <div className="col col-sm-3">
                        <BookList />
                    </div>
                    <div className="col content col-sm-6">
                        <div className="newsfeed">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="message"><h5>What would you like to Yak about?</h5></label>
                                    <textarea id="message"
                                              value={this.state.message}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="4"></textarea>
                                </div>
                                <button type="button" onClick={this.postMessage} className="btn btn-info btn-lg">Post</button>
                            </form> */}

                            <BookList collection={this.state.collection} activeUser={this.props.activeUser} />
                        </div>
                    </div>
                // </div>
            // </div>



        )
    }
}
