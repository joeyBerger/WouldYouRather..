import React from 'react'

const LeaderBoardEntry = (props) => {
    const { user } = props
    const avatarURL = user.avatarURL
    const name = user.name
    const aQ = Object.keys(user.answers).length
    const cQ = user.questions.length
    const score = aQ + cQ
    return(
        <div className="leaderboard-grid-container">
            <span className="nameHeader">{name}</span>
            <img className="avatarImg" src={avatarURL} alt={name}/>           
            <span className="questionsAnsweredGrid">
            Answered questions: {aQ}
            </span>
            <span className="questionsCreatedGrid">
            Created questions: {cQ}
            </span>
            <span className="score">
            Score: {score}
            </span>
        </div>
    )
}

export default LeaderBoardEntry