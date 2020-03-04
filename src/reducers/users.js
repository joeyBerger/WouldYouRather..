import { RECEIVE_USERS, ADD_ANSWERED_QUESTION } from '../actions/users'
import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'


export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWERED_QUESTION :
      console.log('getting ADD_ANSWERED_QUESTION',state);
      return {
        ...state,
        [action.user] : {
          ...state[action.user],
          answers : {
            ...state[action.user].answers,
            [action.questionID] : 'butt'
          }          
        }
      }
    default :
      return state
  }
}