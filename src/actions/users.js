import { showLoading, hideLoading } from 'react-redux-loading'
import { saveLikeToggle, saveTweet, saveQuestionAnswer } from '../utils/api'
import {answerQuestion} from './questions'


export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWERED_QUESTION = 'ADD_ANSWERED_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnsweredQuestion ({user, questionID}) {  //TODO: change to userID, dont export
  return {
    type: ADD_ANSWERED_QUESTION,
    user,
    questionID
  }
}



/*
  show loading,
  save question/user
  when done -> dispatch to question and answer
*/


export function handleAnsweredQuestion ({ authedUser,qid,answer }) {
  console.log('handleAnsweredQuestion');

  return (dispatch) => {
    // const { authedUser } = getState()

    console.log('handleAnsweredQuestion 1');

    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
      // author: authedUser,
      // replyingTo
    })
    // .then((tweet) => {console.log('adf',tweet)})
    .then(() => dispatch(addAnsweredQuestion({
      user : authedUser,
      questionID : qid
    })))
    .then(() => dispatch(answerQuestion({
      id : qid,
      option : answer,
      user : authedUser
    })))
    // ({id, option, user})
    .then(() => dispatch(hideLoading()))
  }
}