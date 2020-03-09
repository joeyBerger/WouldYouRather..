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
          {console.log('this.props.authedUser',this.props.authedUser)}
          <div className='container'>
            {this.props.authedUser === null
              ? null
              : <Nav userName = { users[authedUser].name }/>
              // : <TopBar />
            }            
            {this.props.loading === true
              ? null
              : <div>
                  <Route path ='/login' component={Login} />
                  <Route path ='/logout' component={Logout} />
                  <Route path ='/home' component={Homepage} />
                  <Route path ='/question/:id' component={QuestionContainer}/>
                  <Route path ='/answeredpoll/:id' component={AnsweredPoll} />
                  <Route path ='/leaderboard' component={Leaderboard} />                  
                  <Route path ='/add' component={NewQuestion} />                  
                </div>}




                {/* <span class="grid-container-question">
                    <span class="name-entry">John Edo asks</span>

                    <span class="nameHeader">Would you rather:</span>
                    <img src='https://randomuser.me/api/portraits/men/35.jpg' class="avatarImg"/>

                    <div className="optionOneSelect">
                        <label >
                            <input  type="radio" value="optionOne" checked={true === false}/>
                            <span className = "temp-padding">
                              question.optionOne.text
                            </span>
                        </label>
                    </div>

                    <span class="orBreak">OR</span>
                    <div className="optionTwoSelect">
                        <label >
                            <input  type="radio" value="optionOne" checked={true === false}/>
                            <span className = "temp-padding">
                              question.optionTwo.text
                            </span>
                        </label>
                    </div>
                    <button className="submitButton"> 
                        Submit
                    </button>
                </span> */}

          {/* <span className="top-grid-container">
            <span className="answeredTab">Answered</span>
            <span className="unansweredTab">Unanswered</span>
          </span> */}

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