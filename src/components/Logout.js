import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class Logout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toLogin : false
        }
    }
    componentDidMount() {       
        this.props.dispatch(setAuthedUser(null))
        this.setState(() => ({
            toLogin : true
        }))
    }
    render() {
        if (this.state.toLogin) {
            return <Redirect to='/login' />
        }   
        return (
            <p>
                Logging Out...
            </p>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Logout)