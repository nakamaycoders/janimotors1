import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import categoryReducer from './category.reducer'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  nav: changeState,
  auth: authReducer,
  category: categoryReducer,
})

export default rootReducer
