import React from 'react'
import { Link } from 'react-router-dom'

const QuestionBlock = (props) => {
    const {users, questions, id } = props;
    const author = users[questions[id].author].name
    const avatarURL = users[questions[id].author].avatarURL
    return (
        <div class="grid-padding">
            <span class="grid-container">
                <span class="nameHeader">{author} asks:</span>
                <img src={avatarURL} class="avatarImg"/>
                <span class="optionOne">{questions[id].optionOne.text}</span>
                <span class="orBreak">OR</span>
                <span class="optionTwo">{questions[id].optionTwo.text}</span>
                <span class="submit">
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


            {/* <h2>
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
                </Link>             */}
        </div>        
    )
}

export default QuestionBlock;