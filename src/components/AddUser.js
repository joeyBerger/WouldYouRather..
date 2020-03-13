import React,{Component} from 'react'
import { handleAddNewUser } from '../actions/users'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : '',
            avatarURL : '',
            toLogin : false,
            loginError : false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const id = this.state.name.split(' ').join('').toLowerCase();

        dispatch(handleAddNewUser({
            id,
            name : this.state.name,
            avatarURL : this.state.avatarURL
        }))
        .then((res) => {
            if (res && res.error) {
                this.setState(() => ({
                    loginError : true
                }))
            } else {
                this.setState(() => ({
                    toLogin : true
                }))}
        })
    }
    handleChange = (e,itype) => {
        const value = e.target.value
        this.setState(() => ({
            [itype] : value
        }))
    }

    render() {
        const {name, avatarURL, toLogin} = this.state

        if (toLogin) {
            return <Redirect to='/login' />
        }

        return(
            <div className='center'>
            <h3 className="composeHeader">Enter Information</h3>
            <h3 className="center">Name: </h3>
            <form className='text-input' onSubmit={this.handleSubmit}>
              <textarea className = 'question-form'
                placeholder="Name..."
                value={name}
                onChange={(e) => {this.handleChange(e,"name")}}
              />
              </form>
              <h3 className="center">Avatar URL: </h3>
              <form className='text-input' onSubmit={this.handleSubmit}>
              <textarea className = 'question-form'
                placeholder="Image URL..."
                value={avatarURL}
                onChange={(e) => {this.handleChange(e,"avatarURL")}}
              />
              {this.state.loginError && (
                  <p>User Name Already Exists</p>
              )}
              <button
                className='btn'
                type='submit'
                disabled={name === '' || avatarURL === ''}>
                  Submit
              </button>
            </form>
          </div>
        )
    }
}

function mapStateToProps () {
    return{}
}

export default connect(mapStateToProps)(AddUser)