import React from 'react'

// Components
// ==========
import FriendListApp from 'containers/FriendListApp';
import Counter from 'containers/Counter';
import RedditViewer from 'containers/RedditViewer';
import Module from 'components/Module';

export default class DashboardView extends React.Component {
  render () {
    return (
      <div className='text-center'>
        <Module>
          <FriendListApp />
        </Module>
        <Module>
          <Counter />
        </Module>
        <Module>
          <RedditViewer />
        </Module>
      </div>
    )
  }
}
