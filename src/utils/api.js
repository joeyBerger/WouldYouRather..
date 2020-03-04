import {
  _getUsers,
  _getTweets,
  _saveLikeToggle,
  _saveTweet,
} from './_DATA.js'

import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getUsers1,
  _getQuestions,
} from './_DATA1.js'

// export function getInitialData () {
//   return Promise.all([
//     _getUsers(),
//     _getTweets(),
//   ]).then(([users, tweets]) => ({
//     users,
//     tweets,
//   }))
// }

function getUsers() {
  return _getUsers1()
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

export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}

export function saveTweet (info) {
  return _saveTweet(info)
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(answerObj) {
  return _saveQuestionAnswer(answerObj)
}

