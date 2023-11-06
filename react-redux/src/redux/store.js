const {createStore, combineReducers} = require("redux");
import todoReducer from './reducers/todo-reducer'

const rootReducer = combineReducers({todoReducer,})
const store =  createStore(rootReducer)
export default store;