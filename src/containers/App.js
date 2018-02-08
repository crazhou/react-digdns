import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../'

class App extends React.Component {
  render() {
    return <h1>Hello App.js</h1>;
  }
}

export default App
