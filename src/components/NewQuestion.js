import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    text: '',
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }
  handleChange = (e,wchText) => {
    const text = e.target.value

    this.setState(() => ({
      [wchText] : text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion({
        optionOneText,
        optionTwoText
      }
    ))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { text, toHome, optionOneText, optionTwoText } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Compose new Question</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            // placeholder="What's happening?"
            value={optionOneText}
            onChange={(e) => {this.handleChange(e,"optionOneText")}}
            className='textarea'
            maxLength={100}
          />
          <p>Or...</p>
          <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            value={optionTwoText}
            onChange={(e) => {this.handleChange(e,"optionTwoText")}}
            className='textarea'
            maxLength={100}
          />
          </form>
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)