import React, { PropTypes, Component } from 'react'

const Posts = (props) => {
  let { posts } = props
    return (
      <ul>
        {
          posts.map((post) => {
            let thumb = post.thumbnail
            let domains = post.domain.split('.')
            let domain = domains[domains.length-2]
            return (
                <li className="redditItem" key={post.id}>
                    <a className="leftWrap" href={post.url}>
                      {thumb!=="default" && thumb!=="self" && <div className='imgWrap'><img src={thumb}/></div> }
                      <div className='mainWrap'>
                        <div className='title' href={post.url}>{post.title}</div>
                        <div className='metaSub'>{post.subreddit}-{domain}-{post.author}</div>
                      </div>
                    </a>
                    <a className='rightWrap' href={`http://www.reddit.com/${post.permalink}`}>
                      <div className='metaMain'>
                      <span className='score'>{post.score}pts</span>
                      <span className='comments'>{post.num_comments}</span></div>
                    </a>
                </li>
            )
          })
        }
      </ul>
    )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts;
