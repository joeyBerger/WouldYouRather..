import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'  //TODO: temp
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'  //TODO: temp

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        // dispatch(receiveTweets(tweets))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))  //TODO: temp
        dispatch(hideLoading())
      })
  }
}