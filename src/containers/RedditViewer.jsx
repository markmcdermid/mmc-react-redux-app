import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as redditActions } from 'redux/modules/reddit'

const mapStateToProps = {
  const { selectedReddit, postsByReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  return
  selectedReddit,
  posts,
  isFetching,
  lastUpdated
  }
}

class RedditViewer extends Component {

  static propTypes = {

  };

  shouldComponentUpdate(nextProps, nextState) {
      //ToDo
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      fetchPostsIfNeeded(selectedReddit))
    }
  }
  render () {
    <div>
      <Picker></Picker>
      <p></p>
    </div>
  }
}
