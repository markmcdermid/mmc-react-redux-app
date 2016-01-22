import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import getRoutes from 'routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

import { fetchPostsIfNeeded } from 'redux/modules/reddit'

const store = configureStore( browserHistory )

store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
  console.log(store.getState())
)

ReactDOM.render(
    <Root history={browserHistory} routes={getRoutes(store)} store={store} />,
    document.getElementById('root')
 )
