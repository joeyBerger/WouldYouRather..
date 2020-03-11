import React from 'react'
import { Link } from 'react-router-dom'

const QuestionBlock = (props) => {
    const {users, questions, id } = props;
    const author = users[questions[id].author].name
    const avatarURL = users[questions[id].author].avatarURL
    return (
        <div className="grid-padding">
            <span className="grid-container">
                <span className="nameHeader">{author} asks:</span>
                <img src={avatarURL} className="avatarImg"/>
                <span className="optionOne">{questions[id].optionOne.text}</span>
                <span className="orBreak">OR</span>
                <span className="optionTwo">{questions[id].optionTwo.text}</span>
                <span className="submit">
                <Link to={{
                pathname: `/question/${id}`,
                state: { id: id }
                }}>
                <p> 
                    View Poll
                </p>
                </Link> 
                </span> 
            </span>
        </div>        
    )
}

export default QuestionBlock;