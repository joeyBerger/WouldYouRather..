import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      const { question } = action

    //   let replyingTo = {}
    //   if (question.replyingTo !== null) {
    //     replyingTo = {
    //       [question.replyingTo]: {
    //         ...state[question.replyingTo],
    //         replies: state[question.replyingTo].replies.concat([question.id])
    //       }
    //     }
    //   }

    // return {
    //   ...state,
    //   [action.id]: {
    //     ...state[action.id],
    //     likes: action.hasLiked === true
    //       ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
    //       : state[action.id].likes.concat([action.authedUser])
    //   }
    // }
      return {
        ...state,
        [action.question.id]: action.question,        
      }

    case ANSWER_QUESTION :
      console.log('in question',state)

      const option = action.option === 'optionOne' ? state[action.id].optionOne : state[action.id].optionTwo
      //this is kind of dumb, not sure what the best practice is...  //TODO: follow question logic in DATA
      if (action.option === 'optionOne') {
        return {
          ...state,
          [action.id] : {
            ...state[action.id],            
            optionOne : {
              ...state[action.id].optionOne,
              votes : state[action.id].optionOne.votes.concat(action.user)
            }
          }
        }
      }
      return {
        // ...state,
        // [action.id] : {
        //   ...state[action.id],
        //   ...state[action.id].optionOne,
        //   votes: option.votes.push(action.user)
        // }



        // ...state,
        // [action.id] : {
        //   ...state[action.id],
        //   optionOne : {
        //     ...state[action.id].optionOne,
        //     votes : state[action.id].optionOne.votes.concat(action.user)
        //   }
        // }
        ...state,
        [action.id] : {
          ...state[action.id],
          
          optionTwo : {
            ...state[action.id].optionTwo,
            votes : state[action.id].optionTwo.votes.concat(action.user)
          }
        }
      }
    default :
      return state
  }
}