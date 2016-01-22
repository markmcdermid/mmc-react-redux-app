import React, { Component, PropTypes } from 'react'

class AddFriend extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  };
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: ''
    }
  }
  render () {
    return (
      <input
        type='text'
        value={this.state.name}
        placeholder='Type name of new friend...'
        onKeyDown={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    )
  }

  handleChange (e) {
    this.setState({ name: e.target.value })
  }
  handleSubmit (e) {
    let name = e.target.value.trim()
    if (e.which === 13) {
      this.props.addFriend(name)
      this.setState({ name: '' })
    }
  }
}
export default AddFriend
