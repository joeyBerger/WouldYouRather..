import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Homepage from './Homepage'
import AnsweredPoll from './AnsweredPoll'
import NewQuestion from './NewQuestion'
import QuestionContainer from './QuestionContainer'
import Leaderboard from './Leaderboard'
import Logout from './Logout'
import InaccessiblePage from './InaccessiblePage'
import AddUser from './AddUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser, users } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.authedUser === null
              ? null
              : <Nav userName = { users[authedUser].name }/>
            }
            {this.props.loading === true
              ? null
              : <div>
                  <Route path ={"/"} exact component={Login} />
                  <Route path ={"/login"} component={Login} />
                  <Route path ='/logout' component={Logout} />
                  <Route path ='/home' component={Homepage} />
                  <Route path ='/question/:id' component={QuestionContainer}/>
                  <Route path ='/answeredpoll/:id' component={AnsweredPoll} />
                  <Route path ='/leaderboard' component={Leaderboard} />
                  <Route path ='/add' component={NewQuestion} />
                  <Route path ='/error' component={InaccessiblePage} />
                  <Route path ='/new' component={AddUser} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser : authedUser,
    loading: questions === null,
    users : users
  }
}

export default connect(mapStateToProps)(App)