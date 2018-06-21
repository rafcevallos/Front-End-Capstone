import React, { Component } from "react"

export default class Profile extends Component {
    render() {
        return (
            <div className="profileResults card-deck">
                <h3 className="profile-header">PROFILE</h3>
                <div className="profile-container card">
                    {/* <div className="row"> */}
                        {
                            <div className="card-profile col-lg-6">
                                <div className="card-body">
                                    <h6 className="card-title">ME ME ME ME</h6>
                                    <p className="summary-text">User's information will be here.</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            // </div>
        )
    }
}