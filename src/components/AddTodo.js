import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            type="text"
            className="input"
            ref="input"
            onKeyUp={e => this.handleKeyUp(e)}
          />
        </div>
        <div className="control">
          <button onClick={e => this.handleClick(e)} className="button is-info">
            Add
          </button>
        </div>
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
