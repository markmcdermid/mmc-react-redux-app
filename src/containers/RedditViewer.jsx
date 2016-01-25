import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as redditActions } from 'redux/modules/reddit'
import _ from 'lodash'

const mapStateToProps = state => ({reddit: state.reddit})
@connect(mapStateToProps, redditActions)
export default class RedditViewer extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { selectedReddit } = nextProps
      fetchPostsIfNeeded(selectedReddit)
    }
  }
  render () {
    const { reddit: { postsBySubreddit, selectedSubreddit } } = this.props
    let items = postsBySubreddit[selectedSubreddit].items
    items = _.sortBy(items, 'score').reverse()
    return(
      <div className='redditViewer'>
        <h3>Reddit</h3>

        <ul>
          {
            items.map((item) => {
              let thumb = item.thumbnail
              let domains = item.domain.split('.')
              let domain = domains[domains.length-2]
              return (
                  <li className="redditItem" key={item.id}>
                      <a className="leftWrap" href={item.url}>
                        {thumb!=="default" && thumb!=="self" && <div className='imgWrap'><img src={thumb}/></div> }
                        <div className='mainWrap'>
                          <div className='title' href={item.url}>{item.title}</div>
                          <div className='metaSub'>{item.subreddit}-{domain}-{item.author}</div>
                        </div>
                      </a>
                      <a className='rightWrap' href={`http://www.reddit.com/${item.permalink}`}>
                        <div className='metaMain'>
                        <span className='score'>{item.score}pts</span>
                        <span className='comments'>{item.num_comments}</span></div>
                      </a>
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
