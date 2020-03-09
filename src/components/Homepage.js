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
    handleViewPollButtonClick = (e) => {
        e.preventDefault();
        this.setState(() => ({
            toPoll : true
        }))
    }
    render() {
        let listItems = [];    
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

        // const activeTemp = 'answeredTabActive';
        const activeTemp = this.state.currentTab === 'Unanswered' ? 'unansweredTabActive' : 'unansweredTab'
        
        return(
            <div>
                {/* <ul>
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
                </ul> */}
                <div className="grid-padding">                
                    <span className="top-grid-container"> 
                        <p className={this.state.currentTab === 'Unanswered' ? 'unansweredTabActive' : 'unansweredTab'}
                        onClick = {(e) => {this.handleTabButtonClick(e,"Unanswered")}}>Unanswered</p>
                        <p className={this.state.currentTab !== 'Unanswered' ? 'answeredTabActive' : 'answeredTab'}
                        onClick = {(e) => {this.handleTabButtonClick(e,"Answered")}}>Answered</p>
                    </span>
                </div>

                {/* + this.state.currentTab === 'Unanswered' ? 'Active' : 'Active' */}

                <ul>
                    {listItems.map(q =>
                        <li key = {q}> 
                             <QuestionBlock 
                             questions = {this.props.questions} 
                             users = {this.props.users} 
                             id = {q} 
                             handleViewPollButtonClick = {this.handleViewPollButtonClick}
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