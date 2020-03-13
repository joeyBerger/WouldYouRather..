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
    const { toHome, optionOneText, optionTwoText } = this.state
    console.log(this.props)
    if (toHome === true) {
      return <Redirect to='/home' />
    } else if (this.props.authedUser === null) {         
      return <Redirect to='/error' />
    }

    return (
        <div className='center'>
        <h3 className="composeHeader">Compose New Question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea className = 'question-form'
            placeholder="Questions one..."
            value={optionOneText}
            onChange={(e) => {this.handleChange(e,"optionOneText")}}
          />
          </form>
          <p>Or...</p>
          <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea className = 'question-form'
            placeholder="Questions two..."
            value={optionTwoText}
            onChange={(e) => {this.handleChange(e,"optionTwoText")}}
          />
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

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)