import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer, addUser } from '../utils/api'
import {answerQuestion} from './questions'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWERED_QUESTION = 'ADD_ANSWERED_QUESTION'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_USER = 'ADD_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function addNewUser (user) {
  return {
    type: ADD_USER,
    user
  }
}

export function handleAddNewUser (user) {
  return (dispatch) => {
    dispatch(showLoading())
    return addUser(user)
    .then((res) => {
      if (res.error) {
        return res
      } else {
        dispatch(addNewUser(res))
      }
    })
    .then((res) => {
      dispatch(hideLoading())
      return res
    })
  }
}

export function addNewQuestion (question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

function addAnsweredQuestion ({user, questionID, option}) {
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