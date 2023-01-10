import { createStore, compose } from 'redux'
import rootReducer from './root'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers()
)

export default store