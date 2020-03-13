import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnsweredQuestion } from '../actions/users'
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
            qid : id,
            answer : this.state.selectedQuestion
        }))
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
                <span className="grid-container-question">
                    <span className="name-entry">{author} asks</span>
                    <span className="nameHeader">Would you rather:</span>
                    <img className="avatarImg" src={avatarURL} alt={author}/>
                    <div className="optionOneSelect">
                        <label >
                            <input  type="radio" value="optionOne" checked={this.state.selectedQuestion === 'optionOne'} onChange = {this.onRadioClickHandler}/>
                            <span className = "temp-padding">
                            {question.optionOne.text}
                            </span>
                        </label>
                    </div>
                    <span className="orBreak">OR</span>
                    <div className="optionTwoSelect">
                        <label >
                            <input  type="radio" value="optionTwo" checked={this.state.selectedQuestion === 'optionTwo'} onChange = {this.onRadioClickHandler}/>
                            <span className = "temp-padding">
                            {question.optionTwo.text}
                            </span>
                        </label>
                    </div>
                    <button className="submitButton" disabled = {this.questionCurrentlySelected()} onClick = {this.handleSubmitButton}> 
                        Submit
                    </button>
                </span>
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
