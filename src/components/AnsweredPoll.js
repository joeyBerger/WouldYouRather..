import React from 'react'
import { connect } from 'react-redux'

const AnsweredPoll = (props) => {
    
    const {id, authedUser, question, users} = props
    const avatarURL = users[question.author].avatarURL
    const name = users[question.author].name

    const optionOneVotes = question["optionOne"].votes.length
    const optionTwoVotes = question["optionTwo"].votes.length
    const totalVotes = question['optionOne'].votes.length + question['optionTwo'].votes.length

    return(
        <div>
            <h2>
                Asked by {name}
            </h2>
            <img src={avatarURL} alt={name}></img>
            <h1>
                Results:
            </h1>
            <h2>
                {question.optionOne.text}
            </h2>
            <h3>
                {Math.round(optionOneVotes/totalVotes * 100)/100 * 100 + '%'}
            </h3>
            <h3>
                {`${optionOneVotes} out of ${totalVotes} votes`}
            </h3>
            <h2>
                {question.optionTwo.text}
            </h2>
            <h3>
                {Math.round(optionTwoVotes/totalVotes * 100)/100 * 100 + '%'}
            </h3>
            <h3>
                {`${optionTwoVotes} out of ${totalVotes} votes`}
            </h3>
        </div>
    )
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props
    return {
      id,
      authedUser,
      question: questions[id],
      users
    }
  }

export default connect(mapStateToProps)(AnsweredPoll)

