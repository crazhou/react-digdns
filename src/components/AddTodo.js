import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="input" onKeyUp={e => this.handleKeyUp(e)} />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleClick(e);
    }
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  }
}

export default AddTodo;
