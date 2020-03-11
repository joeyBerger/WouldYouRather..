import React from 'react'
import { connect } from 'react-redux'

const AnsweredPoll = (props) => {    
    const { question, users, userChoice } = props
    const avatarURL = users[question.author].avatarURL
    const name = users[question.author].name
    const optionOneVotes = question["optionOne"].votes.length
    const optionTwoVotes = question["optionTwo"].votes.length
    const totalVotes = question['optionOne'].votes.length + question['optionTwo'].votes.length
    const optionOnePercent = Math.round(optionOneVotes/totalVotes * 100)/100;
    const optionTwoPercent = Math.round(optionTwoVotes/totalVotes * 100)/100;
    const youPickedStr = '(you picked)', classChosenStr = 'Chosen'
    let optionOnePicked = '', optionTwoPicked = '', result1Append = '', result2Append = ''
    if (userChoice === 'optionOne') {
        optionOnePicked = youPickedStr
        result1Append = classChosenStr

    } else {
        optionTwoPicked = youPickedStr
        result2Append = classChosenStr
    }
    return(
        <div>
            <span className="results-grid-container">
            <span className="asked-by">Asked by {name}</span>
            <img className="avatarImg" src={avatarURL} alt={name}/>
            <span className="results">Results:</span>
            <span className={"optionOne"+result1Append}>{question.optionOne.text}</span>
            <span className={"resultNumb1"+result1Append}>{optionOnePercent * 100 + '%'} - {' '}   
            {`${optionOneVotes} out of ${totalVotes} votes`} {optionOnePicked}</span>
            <span className={"optionTwo"+result2Append}>{question.optionTwo.text}</span>
            <span className={"resultNumb2"+result2Append}>{optionTwoPercent * 100 + '%'} - {' '}  
            {`${optionTwoVotes} out of ${totalVotes} votes`} {optionTwoPicked}</span>
            </span>
        </div>
    )
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props
    return {
      question: questions[id],
      users,
      userChoice : users[authedUser].answers[id]
    }
  }

export default connect(mapStateToProps)(AnsweredPoll)

