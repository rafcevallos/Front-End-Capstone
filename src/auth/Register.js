//Purpose:  Component to register a new user
import React, { Component } from 'react'
import './register.css'

export default class Register extends Component {

    // Set initial state
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        email: "",
        password: "",
    }

    // Update state whenever an input field is edited aka tracks user keypresses
    handleFieldChange = function (e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }.bind(this)

    // Handle for register submit
    handleRegister = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {

                // If USER exists. Set local storage, and show HOME view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                    // If USER doesn't exist
                } else {
                    // Create new user in API
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            userName: this.state.userName,
                            city: this.state.city,
                            email: this.state.email,
                            password: this.state.password
                        })
                    })
                        .then(r => r.json())

                        // Set local storage with newly created user's id and show home view
                        .then(newUser => {
                            console.log(newUser)
                            this.props.setActiveUser(newUser.id)
                            this.props.showView("home")
                        })
                }

            })
    }.bind(this)

    render() {
        return (
            <div>
                <header><h1 className="app-title">BAG & BOARD</h1></header>
                <form className="form-register" style={{ animation: `radial-pulse 4s infinite`, }} onSubmit={this.handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                    {/* Input for firstName */}
                    <label htmlFor="inputfirstName" className="sr-only">First Name</label>
                    <input onChange={this.handleFieldChange} type="text" className="form-control" placeholder="First Name" name="firstName" required autoFocus autoComplete="firstName" />

                    {/* Input for lastName */}
                    <label htmlFor="inputlastName" className="sr-only">Last Name</label>
                    <input onChange={this.handleFieldChange} type="text" className="form-control" placeholder="Last Name" name="lastName" required autoFocus autoComplete="lastName" />

                    {/* Input for userName */}
                    <label htmlFor="inputuserName" className="sr-only">Username</label>
                    <input onChange={this.handleFieldChange} type="text" className="form-control" placeholder="Username" name="userName" required autoFocus autoComplete="userName" />

                    {/* Input for city */}
                    <label htmlFor="inputCity" className="sr-only">Location</label>
                    <input onChange={this.handleFieldChange} type="text" className="form-control" placeholder="City" name="city" required autoFocus autoComplete="city" />

                    {/* Input for email */}
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input onChange={this.handleFieldChange} type="email" id="email" className="form-control" placeholder="Email" name="email" required autoFocus autoComplete="email" />

                    {/* Input for password */}
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input onChange={this.handleFieldChange} type="password" id="password" className="form-control" placeholder="Password" name="password" required autoFocus autoComplete="new-password" />

                    {/* Submit Button */}
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    {/* <p className="mt-5 mb-3 text-muted">© 2018</p> */}
                </form>
            </div>
        )
    }
}