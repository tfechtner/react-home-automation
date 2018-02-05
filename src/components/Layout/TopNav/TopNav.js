import React, { Component } from 'react'
import './TopNav.scss'

class TopNav extends Component {
    render () {
        return (
            <div className="row TopNav">
                <div className="col-6 TopNav__left">
                    <h1>Home</h1>
                </div>
                <div className="col-6 TopNav__right">
                    <i className="TopNav__connection fa fa-2x fa-signal"></i>
                </div>
            </div>
        )
    }
}

export default TopNav
