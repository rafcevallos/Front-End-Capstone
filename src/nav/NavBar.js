import React, { Component } from "react"
import kapow from "../images/kapow.png"
import $ from "jquery"
import profilepic from '../images/profile.png'
import "./NavBar.css"


export default class NavBar extends Component {

    // Set initial state
    state = {
        searchTerms: ""
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    search = (e) => {
        if (e.charCode === 13) {
            // 13 actually means 'ENTER' button
            this.props.searchHandler(this.state.searchTerms)
             /*searchTerms is set to blank string so search input is cleared and ready for next search*/
            this.setState({ searchTerms: "" })
        }
    }

    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
        }
    }
    // Tracks user's keypresses
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        console.log(this.state.searchTerms)
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" onClick={this.props.viewHandler} href="#">
                    <img id="nav__home" src={kapow} style={{ height: `75px` }} />
                </a>
                <input id="searchTerms"
                    value={this.state.searchTerms}
                    onChange={this.handleFieldChange}
                    onKeyPress={this.search}
                    className="form-control w-100"
                    type="search"
                    placeholder="Search for a book!"
                    aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" id="nav__profile"
                            onClick={this.props.viewHandler} href="#">
                            <img id="navimg__profile"
                            /* Maybe not have a menu dropdown and create buttons on the navbar
                            instead.  Allow user to click on picture to get to profile */
                                onClick={() => $(".profileMenu").slideToggle(333)}
                                src={profilepic} style={{ height: `75px`, animation: `radial-pulse 1s infinite` }} />
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <this.LoginLogout />
                    </li>
                </ul>
                <article className="profileMenu">
                    <section className="profileMenu__item">
                        <div><a title="notifications" id="nav__profile" href="#">My Profile</a></div>
                        <div><a title="notifications" id="nav__collection" href="#">My Collection</a></div>
                        /* Add onClick function for Wishlist to render view */
                        <div><a title="notifications" id="nav__wishlist" href="#" >My Wishlist</a></div>
                        <div><a title="notifications" id="nav__friends" href="#">My Friends</a></div>
                    </section>
                </article>
            </nav>
        )
    }
}