import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as redditActions } from 'redux/modules/reddit'
import _ from 'lodash'
import Posts from 'components/RedditViewer/RedditPosts'

const mapStateToProps = (state) => {
  // Sort the state in to a nice object to pass to props
  const { reddit: { selectedSubreddit, postsBySubreddit } } = state
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

@connect(mapStateToProps, redditActions)
export default class RedditViewer extends Component {

  componentDidMount() {
      const { fetchPostsIfNeeded, selectedSubreddit } = this.props
      fetchPostsIfNeeded(selectedSubreddit)
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
        const { fetchPostsIfNeeded, selectedSubreddit } = nextProps
        fetchPostsIfNeeded(selectedSubreddit)
      }
    }

  render () {
    const { posts, selectedSubreddit, isFetching, lastUpdated } = this.props
    let lastUpdatedTime = lastUpdated ? (Date.now() - lastUpdated) / 1000 : lastUpdated
    return(
      <div className='redditViewer'>
        <h3>Reddit</h3>
        {isFetching && 'Loading...'}
        {lastUpdated &&
          <span>
            Last updated  {lastUpdatedTime}s ago.
            {' '}
          </span>
        }
        {posts && <Posts posts={posts} />}
      </div>
    )
  }
}
