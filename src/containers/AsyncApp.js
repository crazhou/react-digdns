import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DomainList from "./components/DomainList";

class AsyncApp extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }

  componentWillReceiveProps(nextProps) {}

  handelNewDomain(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <button className="button is-primary">新增域名</button>
          </div>
        </nav>
        <DomainList domains={this.props.domains} />
      </div>
    );
  }
}

AsyncApp.propTypes = {
  domains: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    domains: state.domains
  };
}

export default connect(mapStateToProps)(AsyncApp);
