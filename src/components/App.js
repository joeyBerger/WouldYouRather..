import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import Login from './Login'
import Homepage from './Homepage'
import Question from './Question'
import AnsweredPoll from './AnsweredPoll'
import TopBar from './TopBar'
import NewQuestion from './NewQuestion'
import QuestionContainer from './QuestionContainer'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {console.log('this.props.authedUser',this.props.authedUser)}
          <div className='container'>
            {this.props.authedUser === null && false //temp
              ? null
              : <Nav />
              // : <TopBar />
            }            
            {this.props.loading === true
              ? null
              : <div>
                  {/* <Route path='/' exact component={Dashboard} /> */}
                  {/* <Route path='/tweet/:id' component={TweetPage} /> */}
                  {/* <Route path='/new' component={NewTweet} /> */}
                  <Route path ='/' exact component={Login} />
                  <Route path ='/home' component={Homepage} />
                  <Route path ='/question/:id' component={QuestionContainer}/>
                  <Route path ='/answeredpoll/:id' component={AnsweredPoll} />
                  <Route path ='/new' component={NewQuestion} />
                  
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

// function mapStateToProps ({ authedUser }) {
//   return {
//     loading: authedUser === null
//   }
// }

function mapStateToProps ({ authedUser, questions }) {
  return {
    authedUser : authedUser,
    loading: questions === null
  }
}

export default connect(mapStateToProps)(App)