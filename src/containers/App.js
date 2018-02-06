import { createStore } from 'redux'
import reducer from './reducers/index'

let store = createStore(reducer)

console.log('State : ', store.getState())


store.dispatch({
  type : 'ADD_TODO',
  text: 'Use Redux'
})

console.log('new Store : ', store.getState())