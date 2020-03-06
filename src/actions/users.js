import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api'
import {answerQuestion} from './questions'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWERED_QUESTION = 'ADD_ANSWERED_QUESTION'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addNewQuestion (question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

function addAnsweredQuestion ({user, questionID, option}) {  //TODO: change to userID, dont export
  return {
    type: ADD_ANSWERED_QUESTION,
    user,
    questionID,
    option
  }
}

export function handleAnsweredQuestion ({ authedUser,qid,answer }) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => dispatch(addAnsweredQuestion({
      user : authedUser,
      questionID : qid,
      option : answer,
    })))
    .then(() => dispatch(answerQuestion({
      id : qid,
      option : answer,
      user : authedUser
    })))
    .then(() => dispatch(hideLoading()))
  }
}