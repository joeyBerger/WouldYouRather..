import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addNewQuestion } from '../actions/users'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion ({ optionOneText,optionTwoText }) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author : authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then((obj) => dispatch(addNewQuestion(obj.question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion ({id, option, user}) {
    return {
        type: ANSWER_QUESTION,
        id,
        option,
        user
    }
}