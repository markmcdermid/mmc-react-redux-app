import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import getRoutes from 'routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

import { fetchPostsIfNeeded } from 'redux/modules/reddit'

const historyConfig = { basename: __BASENAME__ }
const history = useRouterHistory(createHistory)(historyConfig)

const initialState = window.__INITIAL_STATE__
const store = configureStore({ initialState, history })

store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
  console.log(store.getState())
)

// Render the React application to the DOM
ReactDOM.render(
    <Root history={history} routes={getRoutes(store)} store={store} />,
    document.getElementById('root')
 )
