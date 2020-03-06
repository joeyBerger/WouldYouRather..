import React, { Component } from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/questions'
import { addAnsweredQuestio, handleAnsweredQuestion } from '../actions/users'
import { Redirect } from 'react-router-dom'

class Poll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedQuestion : '',
            toAnsweredPoll : false
        }
    }    
    componentWillUnmount() {
        this._isMounted = false;
        console.log('componentWillUnmount componentWillUnmount')
    }
    onRadioClickHandler = (e) => {
        const selectedQuestion = e.target.value
        this.setState(() => ({
            selectedQuestion : selectedQuestion
        })) 
    }
    questionCurrentlySelected = (e) => {
        return this.state.selectedQuestion === ''
    }
    handleSubmitButton = (e) => {
        e.preventDefault();
        const { dispatch, id, authedUser } = this.props

        dispatch(handleAnsweredQuestion({
            authedUser,
            qid : id,  //TODO: change id to qid
            answer : this.state.selectedQuestion
        }))
        // .then(() => this.setState(() => ({
        //     toAnsweredPoll : true
        // })))
    }   
    render() {
        const { question, user, id } = this.props
        if (this.state.toAnsweredPoll) {
            return <Redirect to={{
                pathname: `/answeredpoll/${id}`,
                state: { id: id }
            }} />
        }
        
        const avatarURL = user.avatarURL
        const author = user.name

        return(
            <div>
                <h3>
                {author} asks:            
                </h3>

                <h2>
                Would you rather...         
                </h2>
                
                <img src={avatarURL} alt={author}></img>

                <div>
                    <label>
                        <input type="radio" value="optionOne" checked={this.state.selectedQuestion === 'optionOne'} onChange = {this.onRadioClickHandler}/>
                        {question.optionOne.text}
                    </label>
                </div>
                <h3>
                or...           
                </h3>
                <div>
                    <label>
                        <input type="radio" value="optionTwo" checked={this.state.selectedQuestion === 'optionTwo'} onChange = {this.onRadioClickHandler}/>
                        {question.optionTwo.text}
                    </label>
                </div>

                <div>
                    <button disabled = {this.questionCurrentlySelected()} onClick = {this.handleSubmitButton}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props
    return {
      id,
      authedUser : authedUser,
      question: questions[id],
      user : users[questions[id].author],
    }
  }

export default connect(mapStateToProps)(Poll)
