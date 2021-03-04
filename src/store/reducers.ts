import { combineReducers } from 'redux'
import imagesReducer from './images/reducer'

const rootReducer = combineReducers({
  imagesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer