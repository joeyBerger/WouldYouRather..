import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import AnsweredPoll from './AnsweredPoll'

const QuestionContainer = (props) => {

    const {answered,id} = props

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
      answered : users[authedUser].answers[id] === undefined ? false : true
    }
  }

export default connect(mapStateToProps)(QuestionContainer)
