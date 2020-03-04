import React,  {Component } from 'react'
import { connect } from 'react-redux'
import QuestionBlock from './QuestionBlock'
import { Redirect } from 'react-router-dom'

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab : 'Unanswered',
            toPoll : false
        }
    }

    handleTabButtonClick = (e,type) => {
        e.preventDefault();
        this.setState(() => ({
            currentTab : type
        }))
    }

    handleViewPollButtonClick = (e,id) => {  //TODO: might not need this!!
        e.preventDefault();
        this.setState(() => ({
            toPoll : true
        }))
    }

    render() {
        let listItems = [];
    
        //TODO: sort by timestamps??


        if (this.props.questions && this.props.users && this.props.authedUser) {      //TODO: shouldnt have to gaurd
            const {questions, users, authedUser} = this.props;

            //get answered questions from authenticated user
            let answeredQuestions = Object.keys(users[authedUser].answers).sort((a,b) => {users[authedUser].answers});

            //filter questions by active tab and sort by timestamp
            listItems = Object.keys(questions) 
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
            .filter(q => answeredQuestions.includes(q) === (this.state.currentTab === "Answered"))

            if (this.state.toPoll === true) {
                return <Redirect to='/poll' questions={questions}/>
              }
        }
        return(
            <div>
                <ul>
                    <li>
                    <span activeClassName='active' onClick = {(e) => {this.handleTabButtonClick(e,"Unanswered")}}>
                        Unanswered Questions
                    </span>
                    </li>
                    <li>
                    <span activeClassName='active' onClick = {(e) => {this.handleTabButtonClick(e,"Answered")}}>
                        Answered Questions
                    </span>          
                    </li>
                </ul>
                <ul>
                    {listItems.map(q =>   //TODO: shouldnt have to gaurd this.props!!  //TODO: probably a better way of handing off data
                        <li key = {q}> 
                             {/* {this.props.questions[q].optionOne.text}   */}
                             <QuestionBlock 
                             questions = {this.props.questions} 
                             users = {this.props.users} 
                             id = {q} 
                             handleViewPollButtonClick = {this.handleViewPollButtonClick}
                             currentTab = {this.state.currentTab}
                             />
                        </li>
                        )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {
        questions : questions,
        users : users,
        authedUser : authedUser
    }
}

export default connect(mapStateToProps)(Homepage)