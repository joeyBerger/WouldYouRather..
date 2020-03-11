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
// import {Checkmark} from 'react-checkmark';

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

            {/* <span>
              <nav>
                <ul className="main-nav">
                    <li class = "navItemActive"> About</li>
                    <li class = "navItemActive"> About</li>
                    <li class = "navItemActive"> About</li>
                    <li className="pushLeftRight"><a href="">Contact</a></li>
                    <li className="pushRight"><a href="">Contact</a></li>
                </ul>  
              </nav>
            </span> */}

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



              
                {/* <span className="results-grid-container">
                  <span className="asked-by">Asked by Sarah Edo</span>
                  <img className="avatarImg" src='https://randomuser.me/api/portraits/women/44.jpg'/>
                  <span className="results">Results:</span>
                  <span className="optionOne">be telekinetic (your pick)</span>
                  <span className="resultNumb1">0% / 0 out of 2 votes</span>
                  <span className="optionTwo">be telekinetic</span>
                  <span className="resultNumb2">100% / 2 out of 2 votes</span>
                </span> */}

                {/* <Checkmark className = "overlay_image" /> */}

                {/* <img src='https://cdn.imgbin.com/13/21/5/imgbin-check-mark-checkmark-green-check-illustration-1y0KtqdJ8EKKtJL8zGKmLzvPL.jpg' /> */}




                {/* <span className="grid-container-question">
                    <span className="name-entry">John Edo asks</span>

                    <span className="nameHeader">Would you rather:</span>
                    <img src='https://randomuser.me/api/portraits/men/35.jpg' className="avatarImg"/>

                    <div className="optionOneSelect">
                        <label >
                            <input  type="radio" value="optionOne" checked={true === false}/>
                            <span className = "temp-padding">
                              question.optionOne.text
                            </span>
                        </label>
                    </div>

                    <span className="orBreak">OR</span>
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