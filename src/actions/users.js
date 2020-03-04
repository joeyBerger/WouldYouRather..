export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWERED_QUESTION = 'ADD_ANSWERED_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnsweredQuestion ({user, questionID}) {  //TODO: change to userID
  return {
    type: ADD_ANSWERED_QUESTION,
    user,
    questionID
  }
}