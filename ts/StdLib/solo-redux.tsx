import * as _Redux from 'redux'
import * as _ReactRedux from 'react-redux'
import * as _ReduxForm from 'redux-form'
const _ReduxFormUI = require('redux-form-material-ui')
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export const Redux = _Redux
export const ReactRedux = _ReactRedux
export const ReduxForm = _ReduxForm
export const ReduxFormUI = _ReduxFormUI

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

export function redux_provider_gen(reducers:any, React:any, Router: any) {
    reducers.form = ReduxForm.reducer
    reducers.routing = routerReducer
    const store = createStore(combineReducers(reducers))

    return function(node: any, hashHistory: any) {
        const his = syncHistoryWithStore(hashHistory, store)
        return <Provider store={store}>
            <Router history={his}>
            {node}
            </Router>
        </Provider>
    }
}