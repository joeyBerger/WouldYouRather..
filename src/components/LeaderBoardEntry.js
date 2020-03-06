import React from 'react'

const LeaderBoardEntry = (props) => {
    const { user } = props
    const avatarURL = user.avatarURL
    const name = user.name
    const aQ = Object.keys(user.answers).length
    const cQ = user.questions.length
    const score = aQ + cQ
    return(
        <div>
            <img src={avatarURL} alt={name}></img>
            <h2>
                {name}
            </h2>
            <p>
                Answered questions {aQ}
            </p>
            <p>
                Created questions {cQ}
            </p>
            <h3>
                Score
            </h3>
            <h3>
                {score}
            </h3>
        </div>
    )
}

export default LeaderBoardEntry