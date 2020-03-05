import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

const QuestionBlock = (props) => {
    //TODO: don't need current tab if answered logic figured out elsewhere!

    const {users, questions, id, handleViewPollButtonClick, currentTab} = props;
    const author = users[questions[id].author].name
    const avatarURL = users[questions[id].author].avatarURL
    const linkURL = currentTab === "Unanswered" ? `/question/${id}` : `/answeredpoll/${id}`
    return (
        <div>
            <h2>
                {author} asks:            
            </h2>            
            <img src={avatarURL} alt={author}></img>
            <p>
                {questions[id].optionOne.text}
            </p>
            <h2>
                Or
            </h2>
            <p>
                {questions[id].optionTwo.text}
            </p>            
                <Link to={{
                    pathname: `/question/${id}`,
                    state: { id: id }
                }}>
                <p> 
                    View Poll
                </p>
                </Link>            
        </div>        
    )
}

export default QuestionBlock;