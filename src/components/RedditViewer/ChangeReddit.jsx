import React, { Component, PropTypes } from 'react'

class ChangeReddit extends Component {
  static propTypes = {
    changeSubreddit: PropTypes.func.isRequired
  };
  constructor (props, context) {
    super(props, context)
    this.state = {
      subreddit: ''
    }
  }
  render () {
    return (
      <input
        type='text'
        value={this.state.subreddit}
        placeholder='Change Subreddit...'
        onKeyDown={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    )
  }

  handleChange (e) {
    this.setState({ subreddit: e.target.value })
  }
  handleSubmit (e) {
    let subreddit = e.target.value.trim()
    if (e.which === 13) {
      this.props.changeSubreddit(subreddit)
      this.setState({ subreddit: '' })
    }
  }
}
export default ChangeReddit
