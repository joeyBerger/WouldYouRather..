import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LeaderBoardEntry from './LeaderBoardEntry'

const Leaderboard = (props) => {
    const { authedUser, users } = props
    if (authedUser === null) {         
        return <Redirect to='/error' />
    }
    return(
        <div>
            <ul>
                {users.map(user => 
                    <li key = {user.id}>
                        <LeaderBoardEntry user = {user}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

function mapStateToProps ({ authedUser, users }) {
    return {
        users : Object.keys(users).map(user => users[user]).sort((a,b) => {
            var scoreA = a.questions.length + Object.keys(a.answers).length
            var scoreB = b.questions.length + Object.keys(b.answers).length
            if (scoreA < scoreB)
                return 1 
            if (scoreA > scoreB)
                return -1
            return 0
        }),
        authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard)