import React, { Component } from "react"
import "./login.css"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
    }

    // Update state whenever an input field is edited aka tracks user keypresses
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API by checking EMAIL
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // If USER exists. Set local storage, and show HOME view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                    // If USER doesn't exist
                } else {
                    // Create the new user in API
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: this.state.email,
                            password: this.state.password,
                        })
                    })

                        // Set local storage with newly created user's id and show home view
                        .then(newUser => {
                            this.props.setActiveUser(newUser.id)
                            this.props.showView("home")
                        })
                }

            })
    }.bind(this)

    /*
        TODO:
            - Add password verification field
    */
    render() {
        return (
            <div>
                <header><h1 className="app-title">BAG & BOARD</h1></header>
                <form className="form-signin" style={{ animation: `radial-pulse 4s infinite ` }} onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                    {/* Email Input */}
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input onChange={this.handleFieldChange} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus="" />

                    {/* Password Input */}
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input onChange={this.handleFieldChange} type="password" id="password" className="form-control" placeholder="Password" required />

                    {/* Remember Me Checkbox */}
                    <div className="checkbox mb-3">
                        <input type="checkbox" value="remember-me" /> Remember me
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    {/* <p className="mt-5 mb-3 text-muted">© 2018</p> */}
                </form>
            </div>
        )
    }
}
