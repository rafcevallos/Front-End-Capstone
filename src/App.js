import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './nav/NavBar'
import Register from './auth/Register'
import Login from './auth/Login'
import SearchResults from '../src/search/SearchResults'
import Home from '../src/bookfeed/Home'
import Profile from './profile/Profile'
import Wishlist from './bookfeed/WishList'


export default class App extends Component {

  // Set initial state
  state = {
    currentView: "login",
    searchTerms: "",
    activeUser: localStorage.getItem("userId")
  }

  // Search handler -> passed to NavBar
  performSearch = function (terms) {
    this.setState({
      searchTerms: terms,
      currentView: "results"
    })
    // anytime user clicks/enters
  }.bind(this)

  // Function to update local storage and set activeUser state
  setActiveUser = (val) => {
    if (val) {
      localStorage.setItem("userId", val)
    } else {
      localStorage.removeItem("userId")
    }
    this.setState({
      activeUser: val
    })
  }

  // View switcher -> passed to NavBar and Login
  // Argument can be an event (via NavBar) or a string (via Login)
  showView = function (e) {
    let view = null

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1]

      // View switch manually triggered by passing in string
    } else {
      view = e
    }

    // If user clicked logout in nav, empty local storage and update activeUser state
    if (view === "logout") {
      this.setActiveUser(null)
    }

    // Update state to correct view will be rendered
    this.setState({
      currentView: view
    })

  }.bind(this)

  /*
    Function to determine which main view to render.
  */
  View = () => {
    // Conditional: if userId does not exist and the current view is not REGISTER, show LOGIN
    if (localStorage.getItem("userId") === null && this.state.currentView !== "register") {
      return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
      // Conditional: if userId does not exist and the current view is Register, show REGISTER and set active user
    } else if (localStorage.getItem("userId") === null && this.state.currentView === "register") {
      return <Register showView={this.showView} setActiveUser={this.setActiveUser} currentState={this.state} />
    } else {
      switch (this.state.currentView) {
        // Show LOGIN once the user logs out
        case "logout":
          return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
        // Show SEARCH RESULTS when the user searches for a book
        case "results":
          // console.log(this.state.searchTerms)
          return <SearchResults terms={this.state.searchTerms} />
        // Show PROFILE when the user clicks profile icon/menu
        case "profile":
          return <Profile showView={this.showView} setActiveUser={this.setActiveUser} />
        // Show PROFILE when the user clicks profile icon/menu
        case "wishlist":
          return <Wishlist showView={this.showView} setActiveUser={this.setActiveUser} />
        // Show HOME VIEW which is "MY COLLECTON" by default upon logging in
        case "home":
        default:
          return <Home activeUser={this.state.activeUser} />
      }
    }
  }

  render() {
    /* Conditional to prevent navbar from rendering if user is logged out */
    if (localStorage.getItem("userId") === null) {
      return this.View()
    } else {

      return (
        <article>
          {/* This searchHandler is passed to NavBar */}
          <NavBar viewHandler={this.showView}
            searchHandler={this.performSearch}
            activeUser={this.state.activeUser}
            setActiveUser={this.setActiveUser}
          />
          {this.View()}
        </article>
      )
    }
  }
}