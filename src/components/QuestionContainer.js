import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import AnsweredPoll from './AnsweredPoll'
import { Redirect } from 'react-router-dom'

const QuestionContainer = (props) => {

    const {authedUser, users, id} = props
    if (authedUser === null) {         
        return <Redirect to={{
            pathname: '/error',
            state: { desiredURL: `/question/${id}` }
        }}
        />
    }
    const answered = users[authedUser].answers[id] === undefined ? false : true
    return(
        <div>
        {answered === true ? (
            <AnsweredPoll id = {id}/>
        ) :        
            <Question id = {id}/>
        }
        </div>
    )
}

function mapStateToProps ({ authedUser, users }, props) {
    const { id } = props.match.params    
    return {
      id,
      authedUser,
      users
    }
  }

export default connect(mapStateToProps)(QuestionContainer)
