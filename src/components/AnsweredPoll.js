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
    const youPickedStr = '(you picked)'
    const optionOnePicked = userChoice === 'optionOne' ? youPickedStr : ''
    const optionTwoPicked = userChoice === 'optionTwo' ? youPickedStr : ''

    return(
        <div>
            {/* <h2>
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
                {optionOnePercent * 100 + '%'}
            </h3>
            <h3>
                {`${optionOneVotes} out of ${totalVotes} votes`}
            </h3>
            {userChoice === 'optionOne' && (
                <p>
                    Picked!
                </p>
            )}
            <h2>
                {question.optionTwo.text}
            </h2>
            <h3>
                {(1-optionOnePercent) * 100 + '%'}
            </h3>
            <h3>
                {`${optionTwoVotes} out of ${totalVotes} votes`}
            </h3>
            {userChoice === 'optionTwo' && (
                <p>
                    Picked!
                </p>
            )} */}
                <span className="results-grid-container">
                  <span className="asked-by">Asked by {name}</span>
                  <img className="avatarImg" src={avatarURL} alt={name}/>
                  <span className="results">Results:</span>
                  <span className="optionOne">{question.optionOne.text}</span>
                  <span className="resultNumb1">{optionOnePercent * 100 + '%'} - {' '}   
                {`${optionOneVotes} out of ${totalVotes} votes`} {optionOnePicked}</span>
                  <span className="optionTwo">{question.optionTwo.text}</span>
                  <span className="resultNumb2">{(1-optionOnePercent) * 100 + '%'} - {' '}  
                  {`${optionTwoVotes} out of ${totalVotes} votes`} {optionTwoPicked}</span>
                  {/* <div className="overlay_image"></div> */}
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

