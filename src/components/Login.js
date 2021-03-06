import React,  {Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {    
    
    constructor(props) {
        super(props);
        this.state = { 
            loginName: '',
            toHome: false,
            toAddUser : false
        };   
    }
    onDropDownSelect = (e) => {
        this.setState(() => ({
            loginName : e.value
        }))
    }
    handleLoginButton = (e) => {
        e.preventDefault();
        if (this.state.loginName === '') return;
        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.loginName))
        this.setState(() => ({
            toHome : true
        }))
    }
    handleNewUserButton = (e) => {
        e.preventDefault();
        this.setState(() => ({
            toAddUser : true
        }))
    }
    render() {
        if (this.state.toHome === true) {
            let desiredURL = '/home'
            if (this.props.location && this.props.location.state && this.props.location.state.desiredURL) {
                desiredURL = this.props.location.state.desiredURL
            }
            return <Redirect to={desiredURL} />
        } else if (this.state.toAddUser) {
            return <Redirect to='/new' />
        }

        let options =  Object.keys(this.props.users).map(key => 
            ({value: this.props.users[key].id, label: this.props.users[key].name})
        )
        options.sort((a,b) => {
            var nameA=a.label.toLowerCase(), nameB=b.label.toLowerCase()
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })

        return(
            <div className="login">
                <p className='login-header'>Would You Rather...</p>
                <Dropdown className = "login-dropdown" options={options} onChange={this.onDropDownSelect} value={this.state.loginName} placeholder="Select user name" />
                <button className='btn' onClick = {this.handleLoginButton}>
                    LOGIN
                </button>
                <p className="center">New User?</p>
                <button className='btn' onClick = {this.handleNewUserButton}>
                    NEW
                </button>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
  }
  
export default connect(mapStateToProps)(Login)
