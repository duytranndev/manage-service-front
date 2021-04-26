import { Action, applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { FieldReducer } from './reducers/field.reducer'
import { UnitReducer } from './reducers/unit.reducer'

const rootReducer = combineReducers({
  field: FieldReducer,
  unit: UnitReducer
})

const middleWare = [thunk]

const logger: Middleware = () => (next: unknown) => (action: Action): void => {
  if (process.env.NODE_ENV !== 'production') {
  }
  return typeof next === 'function' ? next(action) : undefined
}

const store = createStore(rootReducer, applyMiddleware(logger, ...middleWare))

export default store
