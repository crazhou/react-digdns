import React from 'react'

class Footer extends React.Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a href='#' onCLick={ e=> {
        e.preventDefault();
        this.props.onFilterChange(filter)
      }}>
      {name}
      </a>
    )
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'ALL')}
        {',  '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {',  '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    )
  }
}

export default Footer