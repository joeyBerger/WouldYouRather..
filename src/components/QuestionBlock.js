import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

const QuestionBlock = (props) => {

    

    const {users, questions, id, handleViewPollButtonClick} = props;
    const author = users[questions[id].author].name
    const avatarURL = users[questions[id].author].avatarURL
    return (
        // <Link to={`/poll/${id}`} className='tweet'>

        <Link to={{
            pathname: `/poll/${id}`,
            // search: '?sort=name',
            // hash: '#the-hash',
            state: { id: id }
        }}>

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
            <button onClick = {(e) => handleViewPollButtonClick(e,id)}>
                View Poll
            </button>
        </div>
        </Link>
    )
}

export default QuestionBlock;