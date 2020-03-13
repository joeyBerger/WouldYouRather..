import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getUsers,
  _getQuestions,
  _addUser
} from './_DATA.js'

function getUsers() {
  return _getUsers()
}

function getQuestions() {
  return _getQuestions()
}

export function getInitialData () {
  return Promise.all([
    getUsers(),
    getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(answerObj) {
  return _saveQuestionAnswer(answerObj)
}

export function addUser(user) {
  return _addUser(user)
}

