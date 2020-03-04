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
            toHome: false
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

    render() {

        if (this.state.toHome === true) {
          return <Redirect to='/home' />
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
            <div>
                Login
                <Dropdown options={options} onChange={this.onDropDownSelect} value={this.state.loginName} placeholder="Select user name" />
                <button onClick = {this.handleLoginButton}>
                    LOGIN
                </button>
                {/* <ul>
                    {Object.keys(this.props.users).map(key => 
                        <li key = {this.props.users[key].id}> {this.props.users[key].name}</li>
                    )}
                </ul>                 */}
            </div>
        )
    }
}

// function compare(a, b) {
//     console.log('compare',a)
//     var splitA = a.split(" ");
//     var splitB = b.split(" ");
//     var lastA = splitA[splitA.length - 1];
//     var lastB = splitB[splitB.length - 1];
//     // console.log(lastA,lastB);
//     if (lastA < lastB) return -1;
//     if (lastA > lastB) return 1;
//     return 0;
// }

function mapStateToProps ({ users }) {
    return {
        users : users
    }
  }
  
export default connect(mapStateToProps)(Login)
