import { RECEIVE_USERS, ADD_ANSWERED_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWERED_QUESTION :
      return {
        ...state,
        [action.user] : {
          ...state[action.user],
          answers : {
            ...state[action.user].answers,
            [action.questionID] : action.option
          }          
        }
      }
      case 'ADD_NEW_QUESTION' :
        return {
          ...state,
          [action.question.author]: {
            ...state[action.question.author],
            questions: state[action.question.author].questions.concat([action.question.id])
          }
        }
    default :
      return state
  }
}